import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { GalaxyHeader } from '@/components'
import { Header } from '@/components/layout/header.component'
import siteConfig from '../data/siteConfig'
import './globals.css'
import { Toaster } from 'sonner'
import { sendEmailViaSMTP } from '@/lib/nodemailer'

export const metadata: Metadata = {
  title: `CV | ${siteConfig.siteTitle}`,
  description: siteConfig.siteDescription,
  keywords: siteConfig.keyWords,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#424242" />
      </head>
      <body suppressHydrationWarning={true}>
        <Toaster richColors position="bottom-right" />
        <Header />
        <GalaxyHeader />
        {children}
      </body>
    </html>
  )
}
