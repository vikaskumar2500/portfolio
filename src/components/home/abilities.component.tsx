import siteConfig from '../../data/siteConfig'

import { Bracket, Rating, Constant, Keyword, SubTitle } from '@/components'

export const Abilities = () => (
  <div className="card w-full max-w-[900px] rounded bg-base-200 p-4 shadow-xl">
    <div>
      <SubTitle>Skills</SubTitle>
      <div className="grid grid-cols-1 sm:grid-cols-[300px_300px]">
        {siteConfig.skills?.map((category) => (
          <div key={category.name}>
            <div>{category.name}:</div>
            <div className="mt-2" />
            <Bracket open />
            <div className="ml-4">
              {category.data?.map((skill) => (
                <div className="mb-2 flex items-center" key={skill.name}>
                  <Constant>{skill.name}: </Constant>
                  <Rating value={skill.value} className="ml-2" />
                  <Keyword>,</Keyword>
                </div>
              ))}
            </div>
            <Bracket />
          </div>
        ))}
      </div>
      <SubTitle>Languages</SubTitle>
      <Bracket open />
      <div className="ml-4">
        {siteConfig.languages?.map((language) => (
          <div className="mb-2 flex items-center" key={language.name}>
            <Constant>{language.name}: </Constant>
            <Rating value={language.value} className="ml-2" />
            <Keyword>,</Keyword>
          </div>
        ))}
      </div>
      <Bracket />
    </div>
  </div>
)
