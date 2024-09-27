'use client'

import { useAsync } from 'react-use'

import siteConfig from '../../data/siteConfig'
import { SubTitle, Title } from '@/components'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useActiveSection } from '@/hooks/use-active-section'
import { useEffect } from 'react'

export const Projects = () => {
  const state = useAsync(async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_GITHUB_URL!)
    return response.json()
  }, [])
  const { ref, inView } = useInView({ threshold: 0.2 })
  const { activeSection, setActiveSection } = useActiveSection()

  useEffect(() => {
    if (inView) setActiveSection('projects')
  }, [inView, activeSection])

  const { loading, error, value: repositories } = state

  return (
    <section id="projects" ref={ref} className="flex scroll-mt-10 mt-12 flex-col items-center mx-auto w-full">
      <Title className="text-center">Projects</Title>
      <div
        id="projects"
        ref={ref}
        className="card w-full max-w-[900px] rounded bg-base-200 p-4 shadow-xl"
      >
        <div className="w-full">
          <SubTitle className="text-2xl md:text-4xl">
            Latest repositories on Github
          </SubTitle>
          {loading && (
            <div className="flex h-[380px] w-full items-center justify-center">
              <span className="loading loading-ring h-[75px] w-[75px]"></span>
            </div>
          )}
          {!loading && error && (
            <div className="flex h-[380px] w-full items-center justify-center">
              Check
              <a
                href={siteConfig.social.github}
                className="mx-2 cursor-pointer text-declaration underline"
                target="_blank"
              >
                my Github profile
              </a>
              for more details
            </div>
          )}
          {!loading &&
            repositories?.map?.((repository: any) => (
              <div
                className="mb-3 flex w-full items-center justify-between  border-b border-gray-500 pb-3"
                key={repository.html_url}
              >
                <div className="w-full flex-1">
                  <div className="flex justify-between md:justify-normal md:gap-[40%]">
                    <Link
                      href={repository.html_url}
                      className="w-[20%] cursor-pointer font-bold text-constant underline"
                    >
                      {repository.name}
                    </Link>

                    {repository.homepage && (
                      <a
                        href={repository.homepage}
                        className=" cursor-pointer font-bold text-constant underline"
                      >
                        demo
                      </a>
                    )}
                  </div>
                  <p className="py-1.5">{repository.description}</p>
                  <p className="text-xs">
                    Updated: {new Date(repository.updated_at).toUTCString()}
                  </p>
                </div>
                <div className="ml-1.5 flex min-w-[30px] items-center space-x-2 text-white">
                  <p className="mb-0.75 text-lg">★</p>
                  <div>{repository.stargazers_count}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
