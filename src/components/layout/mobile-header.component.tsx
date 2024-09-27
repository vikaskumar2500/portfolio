'use client'
import { useEffect, useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import siteConfig from '@/data/siteConfig'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useActiveSection } from '@/hooks/use-active-section'

export const MobileHeader = () => {
  const [open, setOpen] = useState(false)
  const {activeSection, setActiveSection} = useActiveSection();
  const { headerLinks } = siteConfig
  
  useEffect(()=>{
    setOpen(false);
  },[activeSection])

  console.log("active section", activeSection);

  return (
    <div className="pr-5 md:hidden">
      <button onClick={() => setOpen((prev) => !prev)}>
        {open ? <CgClose size={20} /> : <HiOutlineMenuAlt3 size={20} />}
      </button>
      {open && (
        <nav className="group group absolute right-0 top-[3.35rem] z-50 h-[40vh] w-full bg-[#0a0a0a]">
          <div className="flex w-full flex-col">
            {headerLinks.map((headerLink) => (
              <Link
                href={headerLink.url}
                onClick={()=>setActiveSection(headerLink.label)}
                key={headerLink.url}
                className="mr-6 w-full py-2 font-medium hover:bg-[#424242]"
              >
                <span className='px-5'>{headerLink.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  )
}
