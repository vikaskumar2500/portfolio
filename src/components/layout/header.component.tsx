'use client'

import Link from 'next/link'
import { useWindowScroll, useWindowSize } from 'react-use'
import siteConfig from '../../data/siteConfig'

export const Header = () => {
  const { headerLinks } = siteConfig
  const { y } = useWindowScroll()
  const { height } = useWindowSize()
  const fadeHeight = Math.min(500, height * 0.6) - 60
  const opacity = y / fadeHeight

  return (
    <header
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
      className="fixed left-0 top-0 z-10 w-full text-white transition-colors duration-100"
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex flex-row">
          {headerLinks.map((headerLink) => (
            <Link
              href={headerLink.url}
              key={headerLink.url}
              className="mr-6 font-medium"
            >
              {headerLink.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
