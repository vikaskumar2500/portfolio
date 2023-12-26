import React, { memo } from 'react'
import siteConfig from '../../data/siteConfig'
import { Bracket, SubTitle, Constant, Declaration, Keyword } from '@/components'
import { CompanyLogo } from './company-logo.component'

export const Experience = memo(() => (
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
                <div>{education.degreeLevel}</div>
                <div>{education.specialization}</div>
                <div>
                  {education.startYear} — {education.endYear}
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
))

Experience.displayName = 'Experience'
