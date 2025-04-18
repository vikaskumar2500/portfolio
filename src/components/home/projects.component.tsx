'use client'


import { SubTitle, Title } from '@/components'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useActiveSection } from '@/hooks/use-active-section'
import { useEffect } from 'react'
import { PROJECTSDATA } from '@/data/projectsData'


export const Projects = () => {
  
  const { ref, inView } = useInView({ threshold: 0.2 })
  const { activeSection, setActiveSection } = useActiveSection()

  useEffect(() => {
    if (inView) setActiveSection('projects')
  }, [inView, activeSection])


  return (
    <section
      id="projects"
      ref={ref}
      className="mx-auto mt-12 flex w-full scroll-mt-10 flex-col items-center"
    >
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

          {PROJECTSDATA?.map?.((repository: any) => (
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
