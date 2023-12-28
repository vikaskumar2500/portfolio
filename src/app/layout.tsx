import { Roboto_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { FontLoader, GalaxyHeader } from '@/components'
import { Header } from '@/components/layout/header.component'
import siteConfig from '../data/siteConfig'
import './globals.css'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  fallback: ['Lucida Console', '"Courier New"', 'monospace'],
  adjustFontFallback: false,
  preload: false,
  display: 'fallback',
})

export const metadata: Metadata = {
  title: `CV | ${siteConfig.siteTitle}`,
  description: siteConfig.siteDescription,
  keywords: siteConfig.keyWords,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#424242" />
      </head>
      <body className={`${robotoMono.className}`}>
        <Header />
        <GalaxyHeader />
        {children}
      </body>
    </html>
  )
}
