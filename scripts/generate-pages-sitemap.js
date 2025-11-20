import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, '..', p)

const BASE_URL = 'https://boxentertainment.ae'

// Static pages with their priorities and change frequencies
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/entertainment', priority: '0.8', changefreq: 'weekly' },
  { url: '/services/entertainment/djs', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/entertainment/magicians', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/entertainment/dancers', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/entertainment/singers', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/entertainment/saxophonists', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/entertainment/emcees', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/entertainment/bands', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/entertainment/comedians', priority: '0.7', changefreq: 'weekly' },
  { url: '/services/photobooth', priority: '0.8', changefreq: 'weekly' },
  { url: '/services/photobooth/360-booth', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/photobooth/mirror-booth', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/photobooth/mirror-booth-backdrop', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/photobooth/original-booth', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/sound-lighting', priority: '0.8', changefreq: 'weekly' },
  { url: '/services/sound-lighting/festoon-lights', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/outdoor-cinema', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/karaoke', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/silent-headsets', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/silent-headsets/silent-disco', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/silent-headsets/silent-yoga', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/silent-headsets/corporate-headsets', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/dance-floors', priority: '0.8', changefreq: 'monthly' },
  { url: '/services/led-letters', priority: '0.8', changefreq: 'monthly' },
  { url: '/events', priority: '0.9', changefreq: 'weekly' },
  { url: '/events/corporate', priority: '0.8', changefreq: 'monthly' },
  { url: '/events/wedding-package', priority: '0.8', changefreq: 'monthly' },
  { url: '/events/parties', priority: '0.7', changefreq: 'monthly' },
  { url: '/events/proposals', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/clients', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
]

export const writePagesitemap = () => {
  try {
    const now = new Date().toISOString().split('T')[0]
    
    const urls = staticPages.map(page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

    // Ensure dist directory exists
    const distPath = toAbsolute('dist')
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true })
    }

    const outputPath = toAbsolute('dist/sitemap-pages.xml')
    fs.writeFileSync(outputPath, sitemap, 'utf-8')
    
    const stats = fs.statSync(outputPath)
    console.log(`✓ Generated sitemap-pages.xml (${staticPages.length} pages, ${stats.size} bytes)`)
    
    return true
  } catch (error) {
    console.error('❌ Failed to generate pages sitemap:', error.message)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  writePagesitemap()
}
