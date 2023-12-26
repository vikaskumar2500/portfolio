import type { MetadataRoute } from 'next'

import config from '../data/siteConfig'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: config.siteTitle,
    short_name: config.siteTitle,
    start_url: '/',
    background_color: config.background_color,
    theme_color: config.theme_color,
    display: config.display,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
