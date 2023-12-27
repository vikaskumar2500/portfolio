"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "../section-heading";
import { projectData } from "@/lib/data";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection("Projects");
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <ul className="">
        {projectData.map(
          ({ title, description, id, imageUrl, tags }, index) => (
            <li
              key={id}
              className="relative group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 mb-3 sm;mb-8  last:mb-0 even:pl-8 hover:bg-gray-200 transition mt-8"
            >
              <div className="pt-4 pb-7 py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700">
                  {description}
                </p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:placeholder:mt-auto">
                  {tags.map((tag, index) => (
                    <li
                      key={index}
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] transition group-hover:-translate-x-3 group-even:group-hover:translate-x-3 group-hover:translate-y-3 group-even:group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
}
