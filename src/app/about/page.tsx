import path from 'path'
import fs from 'fs/promises'
import type { Metadata } from 'next'

import { Keyword, Title } from '@/components'
import siteConfig from '@/data/siteConfig'

export const metadata: Metadata = {
  title: `CV | ${siteConfig.siteTitle}`,
}

export const revalidate = 3600 // revalidate every hour

async function getData() {
  const filePath = path.join(process.cwd(), 'public', 'lighthouse-report.data')
  const res = await fs.readFile(filePath)

  return res.toString()
}

const About = async () => {
  const data = await getData()

  return (
    <div className="container mx-auto flex flex-col justify-center px-6">
      <Title className="text-center text-3xl leading-none">About</Title>
      <p className="my-4 text-center">
        The goal of this site is not only to have a CV website to share, but
        first and foremost, it serves as an example of a React-based app with a
        fully passed Google audit*. In the future, I plan to convert it into a
        kind of personal blog, but for now, it{"'"}s just a CV
      </p>
      <p className="my-4 text-center">
        This is the second iteration of this site, based on Next.js 14. The
        first one was built with Gatsby, and you can find it{' '}
        <a
          href="https://github.com/EugeneDraitsev/cv-gatsby"
          className="text-keyword underline"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <div className="h-72">
        {data && (
          <iframe
            className="h-full w-full border-none bg-gray-100"
            srcDoc={data}
            title="Lighthouse results"
          />
        )}
      </div>
      <p className="my-2 text-center text-xs">
        *Tested in Chrome Version 120.0.6099.130 in{' '}
        <Keyword>incognito mode</Keyword>
      </p>
    </div>
  )
}

export default About
