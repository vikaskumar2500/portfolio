"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { Download, Github, Linkedin, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const IntroPage = () => {
  const { ref, inView } = useInView({threshold:0.5});
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection("Home");
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="flex flex-col justify-center items-center w-[80%] md:w-[40rem] gap-5 mt-20 mb-20"
    >
      <div className="relative w-12 h-12">
        <Image
          src="/photo.jpeg"
          alt="Vikas Kumar&apos;s photo"
          fill
          priority
          className="rounded-full border md:w-20 h-20 flex items-center justify-center ring-slate-200 ring-4"
          quality={100}
        />
      </div>
      <div className="flex items-center w-full mt-5">
        <h1 className="lg:text-3xl md:text-3xl text-lg text-center">
          <strong>Hello, I&apos;m Vikas Kumar.</strong> I&apos;m a{" "}
          <strong>frontend developer</strong> with{" "}
          <strong>more then 1 year</strong> of experience. I enjoy building web
          applications and my focus is{" "}
          <span className="font-semibold underline">React(Next.js)</span>&lsquo;
          <span className="font-semibold">TypeScript</span> and{" "}
          <span className="font-semibold">Tailwind CSS.</span>
        </h1>
      </div>
      <div className="flex items-center lg:w-[26rem] md:w-[28rem] lg:h-10 md:h-10 md:text-sm lg:flex-row md:flex-row  flex-col justify-center gap-1">
        <Link
          href={"/contact"}
          className="flex items-center w-full justify-center bg-slate-900 text-white rounded-full px-2 py-1 gap-1"
        >
          <span className="">Contact me here</span>
          <MoveRight className="w-4" />
        </Link>

        <Link
          href="https://drive.google.com/file/d/1C5nhtHcP81PiBSht6DL43crHCvnH0TuS/view?usp=share_link"
          className="flex items-center justify-center w-full bg-slate-200 rounded-full px-3 py-1 gap-1"
          target="_blank"
          download
        >
          <span>Download CV</span>
          <Download className="w-4" />
        </Link>
        <div className="flex items-center justify-between lg:justify-center md:justify-center gap-2">
          <Link
            href="https://github.com/vikaskumar2500"
            target="_blank"
            className="border rounded-full px-[0.4rem] py-1 bg-slate-200"
          >
            <Github className="w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vikas-kumar25/"
            target="_blank"
            className="border rounded-full px-[0.4rem] py-1 bg-slate-200"
          >
            <Linkedin className="w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroPage;
