import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { writePagesitemap } from './scripts/generate-pages-sitemap.js'
import { writeBlogSitemap } from './scripts/generate-blog-sitemap.js'
import { writeSitemapIndex } from './scripts/generate-sitemap-index.js'

// WordPress API configuration
const WP_API_BASE = process.env.WP_API_BASE || 'https://boxentertainment.ae/wp-json'
const BLOG_LIMIT = Number(process.env.VITE_PRERENDER_BLOG_LIMIT || 100)

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const resolveServerEntry = () => {
  const legacyPath = toAbsolute('dist/server/entry-server.js')
  if (fs.existsSync(legacyPath)) {
    return legacyPath
  }

  const assetsDir = toAbsolute('dist/server/assets')
  if (!fs.existsSync(assetsDir)) {
    return null
  }

  const match = fs
    .readdirSync(assetsDir)
    .find((file) => /^entry-server\..+\.js$/.test(file))

  return match ? path.join(assetsDir, match) : null
}

const serverPath = resolveServerEntry()

if (!serverPath) {
  console.error('Server build not found. Skipping prerender.')
  process.exit(0)
}

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

const importServer = async () => {
  try {
    return await import(url.pathToFileURL(serverPath).href)
  } catch (error) {
    console.error('Failed to import server entry:', error?.stack ?? error)
    throw error
  }
}

const { render } = await importServer()

// Fetch blog posts from WordPress API
const fetchBlogPosts = async () => {
  try {
    let posts = [];
    
    // Try Method 1: Import fetchPosts from server bundle
    try {
      const serverModule = await import(url.pathToFileURL(serverPath).href)
      if (serverModule.fetchPosts) {
        console.log('✓ Using fetchPosts from server bundle')
        const result = await serverModule.fetchPosts({ per_page: BLOG_LIMIT, _embed: true })
        posts = result?.items || []
      }
    } catch (e) {
      console.log('⚠️  Server bundle import failed, trying assets directory...')
      
      // Try Method 2: Find in assets directory
      try {
        const assetsDir = toAbsolute('dist/server/assets')
        if (fs.existsSync(assetsDir)) {
          const files = fs.readdirSync(assetsDir)
          const wpApiFile = files.find(f => f.includes('wordpressApi') || f.includes('index'))
          
          if (wpApiFile) {
            const wpApiPath = path.join(assetsDir, wpApiFile)
            const wpModule = await import(url.pathToFileURL(wpApiPath).href)
            if (wpModule.fetchPosts) {
              console.log('✓ Using fetchPosts from assets directory')
              const result = await wpModule.fetchPosts({ per_page: BLOG_LIMIT, _embed: true })
              posts = result?.items || []
            }
          }
        }
      } catch (e2) {
        console.log('⚠️  Assets directory import failed, using direct WordPress API...')
      }
    }
    
    // Method 3: Direct WordPress REST API call (bulletproof fallback)
    if (!posts || posts.length === 0) {
      console.log('✓ Using direct WordPress API fallback')
      const apiUrl = `${WP_API_BASE}/wp/v2/posts?_embed=true&per_page=${BLOG_LIMIT}&orderby=date&order=desc`
      
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error(`WordPress API returned ${response.status}: ${response.statusText}`)
      }
      
      posts = await response.json()
    }
    
    if (!posts || posts.length === 0) {
      console.warn('⚠️  No blog posts returned from any method')
      return []
    }
    
    // Map posts to routes
    const blogRoutes = posts.map(post => {
      const category = post._embedded?.['wp:term']?.[0]?.[0]
      const categorySlug = category?.slug || 'blog'
      return `/${categorySlug}/${post.slug}`
    })
    
    console.log(`✓ Fetched ${blogRoutes.length} blog posts for prerendering`)
    return blogRoutes
  } catch (error) {
    console.error('❌ Failed to fetch blog posts for prerendering:', error.message)
    if (error.stack) console.error('   Stack:', error.stack)
    return []
  }
}

const blogRoutes = await fetchBlogPosts()

// Define routes explicitly instead of reading from filesystem
const routesToPrerender = [
  '/',
  '/about',
  '/services',
  '/events',
  '/contact',
  '/blog',
  '/clients',
  '/privacy',
  '/terms',
  '/events/corporate',
  '/events/parties',
  '/events/proposals',
  '/events/wedding-package',
  '/services/entertainment',
  '/services/photobooth',
  '/services/sound-lighting',
  '/services/outdoor-cinema',
  '/services/karaoke',
  '/services/silent-headsets',
  '/services/dance-floors',
  '/services/led-letters',
  '/services/entertainment/magicians',
  '/services/entertainment/comedians',
  '/services/entertainment/djs',
  '/services/entertainment/emcees',
  '/services/entertainment/dancers',
  '/services/entertainment/bands',
  '/services/entertainment/singers',
  '/services/entertainment/saxophonists',
  '/services/photobooth/360-booth',
  '/services/photobooth/original-booth',
  '/services/photobooth/mirror-booth',
  '/services/photobooth/mirror-booth-backdrop',
  '/services/silent-headsets/silent-disco',
  '/services/silent-headsets/corporate-headsets',
  '/services/silent-headsets/silent-yoga',
  '/services/sound-lighting/festoon-lights',
  ...blogRoutes, // Add dynamically fetched blog post routes
]

;(async () => {
  // Generate sitemaps before prerendering pages
  console.log('\n🗺️  Generating sitemaps...')
  writePagesitemap()
  await writeBlogSitemap()
  writeSitemapIndex()
  console.log('✓ All sitemaps generated\n')
  
  for (const currentUrl of routesToPrerender) {
    try {
      const result = await render(currentUrl)
      const { appHtml, helmet = {} } =
        typeof result === 'string' ? { appHtml: result, helmet: {} } : result

      // DEBUG: Log helmet data for key routes and blog posts
      const isBlogPost = currentUrl.match(/^\/[^/]+\/[^/]+$/)
      if (currentUrl === '/' || currentUrl === '/about' || currentUrl === '/services' || isBlogPost) {
        console.log(`\n📝 DEBUG for ${currentUrl}:`)
        console.log('  helmet.title:', helmet.title ? helmet.title.substring(0, 100) : '❌ EMPTY')
        console.log('  helmet.meta:', helmet.meta ? helmet.meta.substring(0, 150) : '❌ EMPTY')
      }

      // Inject app HTML
      let html = template.replace('<!--app-html-->', appHtml)

      // If Helmet data is available, replace critical tags and inject the rest
      if (helmet) {
        const h = helmet
        
        // DEBUG: Check what we're about to replace
        if (currentUrl === '/' || currentUrl === '/about' || currentUrl === '/services') {
          console.log(`  Before replacement - has h.title:`, !!h.title)
          console.log(`  Before replacement - has h.meta:`, !!h.meta)
        }
        
        // Replace <title> or insert if missing
        if (h.title) {
          if (/<title[^>]*>[\s\S]*?<\/title>/i.test(html)) {
            html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/i, h.title)
          } else {
            html = html.replace('</head>', `${h.title}</head>`)
          }
        }

        // Track which meta tags we've already processed
        let remainingMeta = h.meta || '';

        // Replace meta description or insert if missing
        const descInHelmet = h.meta?.match(/<meta[^>]+name=["']description["'][^>]*>/i)?.[0]
        if (descInHelmet) {
          if (/<meta[^>]*name=["']description["'][^>]*>/i.test(html)) {
            html = html.replace(/<meta[^>]*name=["']description["'][^>]*>/i, descInHelmet)
          } else {
            html = html.replace('</head>', `${descInHelmet}</head>`)
          }
          // Remove from remainingMeta to prevent duplicate injection
          remainingMeta = remainingMeta.replace(/<meta[^>]+name=["']description["'][^>]*>/i, '')
        }

        // Replace Open Graph title
        const ogTitle = h.meta?.match(/<meta[^>]+property=["']og:title["'][^>]*>/i)?.[0]
        if (ogTitle) {
          html = html.replace(/<meta[^>]*property=["']og:title["'][^>]*>/i, ogTitle)
          remainingMeta = remainingMeta.replace(/<meta[^>]+property=["']og:title["'][^>]*>/i, '')
        }

        // Replace Open Graph description
        const ogDesc = h.meta?.match(/<meta[^>]+property=["']og:description["'][^>]*>/i)?.[0]
        if (ogDesc) {
          html = html.replace(/<meta[^>]*property=["']og:description["'][^>]*>/i, ogDesc)
          remainingMeta = remainingMeta.replace(/<meta[^>]+property=["']og:description["'][^>]*>/i, '')
        }

        // Replace Twitter title
        const twTitle = h.meta?.match(/<meta[^>]+name=["']twitter:title["'][^>]*>/i)?.[0]
        if (twTitle) {
          html = html.replace(/<meta[^>]*name=["']twitter:title["'][^>]*>/i, twTitle)
          remainingMeta = remainingMeta.replace(/<meta[^>]+name=["']twitter:title["'][^>]*>/i, '')
        }

        // Replace Twitter description
        const twDesc = h.meta?.match(/<meta[^>]+name=["']twitter:description["'][^>]*>/i)?.[0]
        if (twDesc) {
          html = html.replace(/<meta[^>]*name=["']twitter:description["'][^>]*>/i, twDesc)
          remainingMeta = remainingMeta.replace(/<meta[^>]+name=["']twitter:description["'][^>]*>/i, '')
        }

        // Inject ONLY remaining (non-duplicate) Helmet tags before </head>
        const inject = `${remainingMeta}${h.link || ''}${h.script || ''}${h.noscript || ''}`
        if (inject.trim()) {
          html = html.replace('</head>', `${inject}</head>`)
        }
      }

      const filePath = currentUrl === '/' ? 'dist/index.html' : `dist${currentUrl}/index.html`

      fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true })
      fs.writeFileSync(toAbsolute(filePath), html)
      
      // Verify meta tags were injected
      const hasTitle = /<title>[\s\S]*?<\/title>/i.test(html)
      const hasDescription = /<meta\s+name=["']description["'][^>]*>/i.test(html)
      
      // Extract actual title for verification
      const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i)
      const actualTitle = titleMatch ? titleMatch[1].substring(0, 80) : '❌ NOT FOUND'
      
      if (!hasTitle || !hasDescription) {
        console.warn(`⚠️  Warning: ${currentUrl} missing meta tags (title: ${hasTitle}, desc: ${hasDescription})`)
      } else {
        // Only log details for key routes to keep output clean
        if (currentUrl === '/' || currentUrl === '/about' || currentUrl === '/services') {
          console.log(`✓ ${filePath}`)
          console.log(`  Final title: "${actualTitle}"`)
        } else {
          console.log(`✓ pre-rendered: ${filePath}`)
        }
      }
    } catch (error) {
      console.error(`Failed to prerender ${currentUrl}:`, error?.stack ?? error)
    }
  }
})()
