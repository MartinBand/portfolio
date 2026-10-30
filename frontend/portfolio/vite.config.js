import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { projects } from './src/data/projects.js'

// Dirección pública del sitio (si cambia, actualizarla también en index.html y public/robots.txt)
const SITE_URL = 'https://martinbandoni-portfolio.netlify.app'

// Genera sitemap.xml en cada build con el inicio y la página de cada proyecto
function sitemap() {
  return {
    name: 'sitemap',
    apply: 'build',
    generateBundle() {
      const hoy = new Date().toISOString().slice(0, 10)
      const urls = ['/', ...projects.map((p) => `/proyectos/${p.slug}`)]
      const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...urls.map((u) => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${hoy}</lastmod></url>`),
        '</urlset>',
        '',
      ].join('\n')
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: xml })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap()],
})
