import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading = ({ children, className }: SectionHeaderProps) => {
  return (
    <h2
      className={cn(
        "w-full text-center font-semibold lg:text-2xl md:text-2xl text-xl",
        className
      )}
    >
      {children}
    </h2>
  );
};
