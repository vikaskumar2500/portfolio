'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useWindowScroll, useWindowSize } from 'react-use'

import siteConfig from '@/data/siteConfig'
import { MobileHeader } from './mobile-header.component'
import { useActiveSection } from '@/hooks/use-active-section'

export const Header = () => {
  const { headerLinks } = siteConfig
  const { y } = useWindowScroll()
  const { height } = useWindowSize()
  const fadeHeight = Math.min(500, height * 0.6) - 60
  const [opacity, setOpacity] = useState(0)
  const { setActiveSection } = useActiveSection()

  useEffect(() => {
    setOpacity(y / fadeHeight)
  }, [setOpacity, y, fadeHeight])

  return (
    <header
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
      className="fixed left-0 top-0 z-10 flex w-full items-center justify-between text-white transition-colors duration-100"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="https://devvikas.info" passHref legacyBehavior>
          <a>
            devvikas.info
          </a>
        </Link>
      </div>
      <MobileHeader />
      <nav className=" container mx-auto hidden items-center justify-between px-4 py-4 md:flex">
        <div className="flex flex-row">
          {headerLinks.map((headerLink) => (
            <Link
              href={headerLink.url}
              onClick={() => setActiveSection(headerLink.label.toLowerCase())}
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
