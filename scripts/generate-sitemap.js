import fs from 'fs'
import path from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'

const BASE_URL = process.env.SITE_URL || 'https://hamzaqadeer.netlify.app'

// Define the paths you want in the sitemap. Update as needed.
const routes = [
  '/',
  '/#about',
  '/#projects',
  '/#skills',
  '/#contact'
]

async function build() {
  const sitemap = new SitemapStream({ hostname: BASE_URL })
  const xmlBuffer = await streamToPromise(
    (async function* () {
      for (const url of routes) {
        yield { url }
      }
    })().pipe ? (async function* () {}) : sitemap
  )
}

// Simpler implementation without complex stream piping
async function buildSimple() {
  const sitemap = new SitemapStream({ hostname: BASE_URL })
  for (const url of routes) sitemap.write({ url })
  sitemap.end()
  const xml = await streamToPromise(sitemap)
  const outPath = path.resolve(process.cwd(), 'public', 'sitemap.xml')
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, xml.toString())
  console.log('sitemap written to', outPath)
}

buildSimple().catch((err) => {
  console.error(err)
  process.exit(1)
})
