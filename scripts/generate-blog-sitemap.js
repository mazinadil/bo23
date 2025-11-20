import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, '..', p)

// Core configuration
const BASE_URL = process.env.SITEMAP_BASE_URL || 'https://boxentertainment.ae'
const WP_API_BASE = (process.env.WP_API_BASE || process.env.VITE_WP_API_BASE || 'https://boxentertainment.ae/wp-json').replace(/\/$/, '')
const requestedBlogLimit = Number(process.env.VITE_PRERENDER_BLOG_LIMIT || 100)
const BLOG_LIMIT = Number.isFinite(requestedBlogLimit) && requestedBlogLimit > 0 ? requestedBlogLimit : 100
const PAGE_SIZE = 100 // WordPress API hard limit per page
const WP_USER_AGENT = process.env.WP_USER_AGENT || 'Mozilla/5.0 (compatible; BoxEntertainmentSitemap/1.0; +https://boxentertainment.ae)'

let cachedFetch = null
const getFetch = async () => {
  if (cachedFetch) return cachedFetch
  if (globalThis.fetch) {
    cachedFetch = globalThis.fetch
    return cachedFetch
  }
  const { default: nodeFetch } = await import('node-fetch')
  cachedFetch = nodeFetch
  return cachedFetch
}

const buildUrl = (pathname, params = {}) => {
  const pathWithSlash = pathname.startsWith('/') ? pathname : `/${pathname}`
  const search = new URLSearchParams(params)
  const query = search.toString()
  return `${WP_API_BASE}${pathWithSlash}${query ? `?${query}` : ''}`
}

const buildHeaders = () => {
  const headers = new Headers({
    Accept: 'application/json',
    'User-Agent': WP_USER_AGENT,
    'Accept-Language': 'en-US,en;q=0.9',
  })

  if (process.env.WP_API_TOKEN) {
    headers.set('Authorization', `Bearer ${process.env.WP_API_TOKEN}`)
  } else if (process.env.WP_API_USER && process.env.WP_API_PASSWORD) {
    const creds = Buffer.from(`${process.env.WP_API_USER}:${process.env.WP_API_PASSWORD}`).toString('base64')
    headers.set('Authorization', `Basic ${creds}`)
  }

  return headers
}

const fetchJson = async (pathname, params) => {
  const fetch = await getFetch()
  const apiUrl = buildUrl(pathname, params)
  const response = await fetch(apiUrl, { headers: buildHeaders() })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`WordPress API ${response.status}: ${response.statusText} - ${apiUrl} - ${body.slice(0, 200)}`)
  }

  const data = await response.json()
  return { data, response }
}

const fetchAllPosts = async () => {
  const posts = []
  let page = 1
  let totalPages = 1

  while (page <= totalPages && posts.length < BLOG_LIMIT) {
    const { data, response } = await fetchJson('/wp/v2/posts', {
      _embed: true,
      per_page: Math.min(PAGE_SIZE, BLOG_LIMIT),
      page,
      orderby: 'date',
      order: 'desc',
    })

    posts.push(...data)

    const headerPages = Number(response.headers.get('X-WP-TotalPages'))
    if (!Number.isNaN(headerPages) && headerPages > 0) {
      totalPages = headerPages
    }

    page += 1
  }

  return posts.slice(0, BLOG_LIMIT)
}

const fetchPostsFromRss = async () => {
  try {
    const fetch = await getFetch()
    const rssUrl = `${BASE_URL.replace(/\/$/, '')}/feed/`
    const response = await fetch(rssUrl, { headers: { 'User-Agent': WP_USER_AGENT, Accept: 'application/rss+xml,application/xml;q=0.9,*/*;q=0.8' } })
    if (!response.ok) {
      throw new Error(`RSS returned ${response.status}: ${response.statusText}`)
    }
    const xml = await response.text()

    // Very light RSS parsing to avoid extra deps
    const items = xml.split('<item>').slice(1).map(chunk => `<item>${chunk}`)
    const posts = items.map(item => {
      const linkMatch = item.match(/<link>([^<]+)<\/link>/i)
      const dateMatch = item.match(/<pubDate>([^<]+)<\/pubDate>/i)
      const slug = linkMatch?.[1]?.split('/').filter(Boolean).pop() || ''
      const categorySlugMatch = linkMatch?.[1]?.split('/').filter(Boolean)
      const categorySlug = categorySlugMatch?.[categorySlugMatch.length - 2] || 'blog'

      return {
        slug,
        link: linkMatch?.[1],
        date: dateMatch ? new Date(dateMatch[1]).toISOString() : new Date().toISOString(),
        _embedded: { 'wp:term': [[{ slug: categorySlug, taxonomy: 'category' }]] },
      }
    })

    const sanitized = posts.filter(p => p.slug && p.link)
    if (sanitized.length === 0) {
      throw new Error('RSS contained no posts')
    }
    return sanitized.slice(0, BLOG_LIMIT)
  } catch (error) {
    console.warn('⚠️  RSS fallback failed:', error.message)
    return []
  }
}

const fetchCategories = async () => {
  try {
    const { data } = await fetchJson('/wp/v2/categories', { per_page: 100 })
    return data
  } catch (error) {
    console.warn('⚠️  Failed to fetch categories, continuing with posts only:', error.message)
    return []
  }
}

export const writeBlogSitemap = async () => {
  try {
    console.log('📝 Fetching blog posts from WordPress API...')
    
    let posts = []
    let apiError = null

    // Fetch all posts (paginate to ensure nothing is missed)
    try {
      posts = await fetchAllPosts()
    } catch (error) {
      apiError = error
      console.warn('⚠️  WP API fetch failed, will try RSS fallback:', error.message)
    }

    let viaFallback = false

    // RSS fallback if API blocks us (e.g., 403)
    if (!posts || posts.length === 0) {
      console.warn('⚠️  No posts from API, trying RSS feed fallback...')
      posts = await fetchPostsFromRss()
      viaFallback = posts.length > 0
    }

    const categories = await fetchCategories()

    if (!posts || posts.length === 0) {
      const msg = apiError
        ? `No posts returned. API error: ${apiError.message}. RSS fallback was also empty.`
        : 'No posts returned from WordPress (API and RSS fallback empty)'
      throw new Error(msg)
    }
    
    // Generate sitemap entries
    const urls = []
    
    // Add category pages
    if (categories.length > 0) {
      categories.forEach(category => {
        if (category.count > 0) { // Only include categories with posts
          urls.push(`  <url>
    <loc>${BASE_URL}/blog/${category.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`)
        }
      })
    }
    
    // Add individual blog posts
    posts.forEach(post => {
      const category = post._embedded?.['wp:term']?.[0]?.[0]
      const categorySlug = category?.slug || 'blog'
      
      // Convert WordPress date to ISO format
      const lastmod = post.modified ? new Date(post.modified).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
      
      urls.push(`  <url>
    <loc>${BASE_URL}/${categorySlug}/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`)
    })
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

    // Ensure dist directory exists
    const distPath = toAbsolute('dist')
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true })
    }

    const outputPath = toAbsolute('dist/sitemap-blog.xml')
    fs.writeFileSync(outputPath, sitemap, 'utf-8')
    
    const stats = fs.statSync(outputPath)
    const sourceLabel = viaFallback ? 'RSS fallback' : 'WP API'
    console.log(`✓ Generated sitemap-blog.xml (${categories.length} categories, ${posts.length} posts, ${stats.size} bytes) via ${sourceLabel}`)
    
    return true
  } catch (error) {
    console.error('❌ Failed to generate blog sitemap:', error.message)
    console.error('⚠️  Continuing build without blog sitemap')
    
    // Create empty blog sitemap as fallback
    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`
    
    const distPath = toAbsolute('dist')
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true })
    }
    
    fs.writeFileSync(toAbsolute('dist/sitemap-blog.xml'), emptySitemap, 'utf-8')
    console.log('✓ Created empty blog sitemap as fallback')
    
    return false
  }
}

// Run if called directly
if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  await writeBlogSitemap()
}
