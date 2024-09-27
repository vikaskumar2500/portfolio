'use client'
import { FaTelegram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import siteConfig from '@/data/siteConfig'
import { Title } from '@/components'
import ContactForm from '../layout/contact-form'
import { useInView } from 'react-intersection-observer'
import { useActiveSection } from '@/hooks/use-active-section'
import React from 'react'

export const Contacts = () => {
  const { ref, inView } = useInView({ threshold: 0.5 })
  const { activeSection, setActiveSection } = useActiveSection()

  React.useEffect(() => {
    if (inView) setActiveSection('contacts')
  }, [inView, activeSection])
  return (
    <section id="contacts" ref={ref} className="flex scroll-mt-5 mt-12 flex-col items-center mx-auto w-full">
      <Title className="text-center">Contacts</Title>
      <div
        id="contact"
        ref={ref}
        className="card w-full max-w-[900px] rounded bg-base-200 p-4 shadow-xl"
      >
        <ContactForm />
        <div className="text flex w-full md:w-1/2  items-center justify-center space-x-2 py-4">
          {siteConfig.social.github && (
            <a
              className="transition-all hover:text-gray-500"
              href={siteConfig.social.github}
              aria-label="github"
            >
              <FaGithub size="32" />
            </a>
          )}
          {siteConfig.social.linkedin && (
            <a
              className="transition-all hover:text-blue-600"
              href={siteConfig.social.linkedin}
              aria-label="linkedin"
            >
              <FaLinkedin size="32" />
            </a>
          )}
          {siteConfig.social.telergam && (
            <a
              className="transition-all hover:text-blue-400"
              href={siteConfig.social.telergam}
              aria-label="telergam"
            >
              <FaTelegram size="32" />
            </a>
          )}
          {siteConfig.social.email && (
            <a
              className="transition-all hover:text-red-600"
              href={`mailto:${siteConfig.social.email}`}
              aria-label="email"
            >
              <FaEnvelope size="32" />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
