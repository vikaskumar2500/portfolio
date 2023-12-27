"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "../section-heading";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection("About");
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center flex-nowrap w-[80%] text-xl lg:w-[40rem] md:w-[40rem] gap-5 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <p className="text-center">
        I recently completed my
        <span className="font-semibold">
          Bachelor of Technology(B.Tech)
        </span>{" "}
        from the prestigious{" "}
        <span className="font-semibold">
          National Institue of Technology, Silchar
        </span>{" "}
        and my final aggregate was{" "}
        <span className="font-semibold">8.11 CGPA.</span> During the college I
        have completed a comprehensive{" "}
        <span className="font-semibold">
          Data Structures and Algorithms(DSA)
        </span>{" "}
        course from the <span className="font-semibold">Coding Ninjas </span>and
        am Currently furtheing my education in Full Stack Developement from the{" "}
        <span className="font-semibold">Sharpener Tech.</span> Simultaneously, I
        have started the internship at{" "}
        <span className="font-semibold">ABOVE EDGE GROUP OF COMPANIES</span>{" "}
        which providing me hands-on-experience in real-world web developement
        projects.
      </p>
      <p className="text-center">
        I am excited to contribute my technical expertise and{" "}
        <span className="font-semibold">
          creative problem-solving abilities
        </span>{" "}
        to dynamic projects and collaborate with teams that share a passion for
        pushing the boundaries of web development. I am continuously expanding
        my knowledge and skills to ensure I remain a valuable asset in the
        ever-evolving world of{" "}
        <span className="font-semibold">frontend development.</span>
      </p>
    </section>
  );
};

export default About;
