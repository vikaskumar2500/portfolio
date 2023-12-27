"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { linksData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect } from "react";

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <header className="z-[999] relative">
      <nav className="fixed top-0 left-0 w-full flex items-center justify-center bg-[#fff] shadow-lg lg:shadow-none md:shadow-none">
        <ul className="flex items-center border-b-2lg:border md:border-b-0 justify-center text-sm lg:text-base lg:font-semibold  gap-4 font-normal md:font-[500] flex-wrap md:border w-[80%] md:max-w-[31rem] lg:max-w-[36rem] py-3 lg:mt-2 md:mt-2 lg:rounded-full md:rounded-full lg:shadow-lg md:shadow-lg">
          {linksData.map((link) => (
            <li key={link.title} className="relative">
              <Link
                href={link.path}
                className={cn(
                  "flex w-full items-center justify-center px-2 py-1 text-gray-600",
                  activeSection === link.title ? "text-gray-950" : ""
                )}
                onClick={() => setActiveSection(link.title)}
              >
                {link.title}
                {activeSection === link.title && (
                  <span className="rounded-full bg-gray-100 absolute inset-0 -z-10 transition ease-in-out" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
