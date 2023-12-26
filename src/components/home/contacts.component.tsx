import { FaTelegram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import siteConfig from '../../data/siteConfig'
import { SubTitle } from '@/components'

export const Contacts = () => (
  <div className="card w-full max-w-[900px] rounded bg-base-200 p-4 shadow-xl">
    <SubTitle>You can find me here</SubTitle>
    <div className="flex items-center justify-center space-x-2 py-4">
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
)
