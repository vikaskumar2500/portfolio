'use client'
import React, { memo } from 'react'
import siteConfig from '@/data/siteConfig'
import {
  Bracket,
  SubTitle,
  Constant,
  Declaration,
  Keyword,
  Title,
} from '@/components'
import { CompanyLogo } from './company-logo.component'
import { useInView } from 'react-intersection-observer'
import { useActiveSection } from '@/hooks/use-active-section'

export const Experience = memo(() => {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const { activeSection, setActiveSection } = useActiveSection()

  React.useEffect(() => {
    if (inView) setActiveSection('experience')
  }, [inView, activeSection])
  return (
    <section
      id="experience"
      ref={ref}
      className="mx-auto mt-12 flex w-full scroll-mt-10 flex-col items-center"
    >
      <Title className="text-center">Experience</Title>
      <div className="card max-w-[900px] rounded bg-base-200 p-4 shadow-xl">
        <div className="overflow-hidden shadow sm:rounded-lg">
          <SubTitle>Careers</SubTitle>
          <Bracket square open />
          <div className="ml-2">
            {siteConfig.jobs?.map((job) => (
              <div key={job.date} className="px-2">
                <Bracket open />
                <div className="flex flex-col items-stretch justify-stretch md:flex-row md:items-center">
                  <CompanyLogo
                    className="w-15 h-15 mx-auto md:mx-5"
                    name={job.companyIcon}
                  />
                  <div className="mr-4 flex min-w-[250px] flex-col text-center text-sm md:text-left">
                    <Constant className="text-[16px]">{job.company}</Constant>
                    <Declaration>{job.location}</Declaration>
                    <div>{job.occupation}</div>
                    <div>{job.date}</div>
                  </div>
                  <div className="mt-4 text-center md:ml-4 md:mt-0 md:text-left">
                    {job.description}
                  </div>
                </div>
                <Bracket />
                <Keyword>,</Keyword>
              </div>
            ))}
          </div>
          <Bracket square />
          <div className="mt-2" />
          <SubTitle>Education</SubTitle>
          <Bracket square open />
          <div className="ml-2">
            {siteConfig.education?.map((education) => (
              <div key={education.startYear} className="px-2">
                <Bracket open />
                <div className="flex flex-col items-stretch justify-stretch md:flex-row md:items-center">
                  <CompanyLogo
                    className="w-15 h-15 mx-auto md:mx-5"
                    name={education.icon}
                  />
                  <div className="min-w-250px mr-4 flex flex-col text-center text-sm md:text-left">
                    <Constant className="text-lg">{education.name}</Constant>
                    <Declaration>{education.location}</Declaration>
                    <div>
                      <span>{education.degreeLevel}</span>
                      {
                        <span>
                          ({education.startYear} — {education.endYear})
                        </span>
                      }
                    </div>
                    {/* <div>{education.specialization}</div> */}
                    <div className='flex flow-row gap-2'>
                      <span>CGPA:</span>
                      <span>{education.aggregate}/10</span>
                    </div>
                  </div>
                </div>
                <Bracket />
                <Keyword>,</Keyword>
              </div>
            ))}
          </div>
          <Bracket square />
        </div>
      </div>
    </section>
  )
})

Experience.displayName = 'Experience'
