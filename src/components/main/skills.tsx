"use client";

import React, { useEffect } from "react";
import { SectionHeading } from "../section-heading";
import { skillsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/hooks/use-active-section";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection("Skills");
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[42rem] scroll-mt-28 text-center sm:mb-40 flex-col items-center justify-center"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-10">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="bg-white border list-none border-black/[0.1] rounded-xl px-5 py-1"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
