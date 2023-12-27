'use client'

import { useAsync } from 'react-use'

import { Keyword, Title } from '@/components'

const About = () => {
  const { loading, value } = useAsync(async () => {
    const result = await fetch('/lighthouse-report.data')
    return result.text()
  })

  return (
    <div className="container mx-auto flex flex-col justify-center px-6">
      <Title className="text-center text-3xl leading-none">About</Title>
      <p className="my-4 text-center">
        The goal of this site is not only to have some CV-web site to share,
        It&apos;s first of all an example of react-based app with fully passed
        google audit*. In future I&apos;m planning to convert it to kind of
        personal blog, but for now that&apos;s just an CV.
      </p>
      <div className="h-72">
        {loading && (
          <div className="h-full w-full animate-pulse bg-gray-200"></div>
        )}
        {!loading && value && (
          <iframe
            className="h-full w-full border-none bg-gray-100"
            srcDoc={value}
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
