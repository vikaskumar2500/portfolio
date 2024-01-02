"use client";

import React, { useEffect } from "react";

import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { SectionHeading } from "../section-heading";

import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/hooks/use-active-section";

export const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { activeSection, setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection("Experience");
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading className="mb-10">My Experience</SectionHeading>

      <VerticalTimeline animate={true} lineColor="">
        {experiencesData.map((experienceItem, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0,0,0,0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
              marginBottom: "3rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3af",
            }}
            iconStyle={{ background: "white", fontSize: "1.5rem" }}
            date={experienceItem.date}
            icon={experienceItem.icon}
            className="vertical-timeline-element--education"
          >
            <h2 className="font-bold capitalize text-neutral-700">
              {experienceItem.title}
            </h2>
            <p className="font-normal !mt-0">{experienceItem?.location}</p>
            <p className="!mt-1 !font-normal text-gray-700">
              {experienceItem.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
