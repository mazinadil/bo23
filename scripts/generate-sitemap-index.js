import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, '..', p)

const BASE_URL = 'https://boxentertainment.ae'

export const writeSitemapIndex = () => {
  try {
    // Copy image-sitemap.xml from public to dist
    const imageSitemapSource = toAbsolute('public/image-sitemap.xml')
    const imageSitemapDest = toAbsolute('dist/image-sitemap.xml')
    
    if (fs.existsSync(imageSitemapSource)) {
      fs.copyFileSync(imageSitemapSource, imageSitemapDest)
      console.log('✓ Copied image-sitemap.xml to dist/')
    } else {
      console.warn('⚠️  image-sitemap.xml not found in public/')
    }
    
    const now = new Date().toISOString().split('T')[0]
    
    const sitemaps = [
      { loc: `${BASE_URL}/sitemap-pages.xml`, lastmod: now },
      { loc: `${BASE_URL}/sitemap-blog.xml`, lastmod: now },
      { loc: `${BASE_URL}/image-sitemap.xml`, lastmod: now },
    ]
    
    const sitemapEntries = sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')
    
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`

    // Ensure dist directory exists
    const distPath = toAbsolute('dist')
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true })
    }

    const outputPath = toAbsolute('dist/sitemap.xml')
    fs.writeFileSync(outputPath, sitemapIndex, 'utf-8')
    
    const stats = fs.statSync(outputPath)
    console.log(`✓ Generated sitemap.xml index (${sitemaps.length} sitemaps, ${stats.size} bytes)`)
    
    return true
  } catch (error) {
    console.error('❌ Failed to generate sitemap index:', error.message)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  writeSitemapIndex()
}
