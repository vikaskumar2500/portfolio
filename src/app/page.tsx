import React from 'react'

import {
  Title,
  Profile,
  Experience,
  Abilities,
  Projects,
  Contacts,
} from '@/components'

export default function Home() {
  return (
    <div className="relative mt-[-100px] flex flex-col items-center px-4 pb-[20px]">
      <Profile />

      
      <Experience />

      
      <Abilities />

      
      <Projects />

      <Contacts />
    </div>
  )
}
