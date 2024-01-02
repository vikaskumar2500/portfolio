import SectionDivider from "@/components/SectionDivider";
import AboutPage from "@/components/main/AboutPage";
import IntroPage from "@/components/main/IntroPage";
import Projects from "./projects/page";
import Skills from "@/components/main/skills";
import { Experience } from "@/components/main/experience";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* <SectionDivider /> */}
      <IntroPage />
      {/* <SectionDivider /> */}
      <SectionDivider />

      <AboutPage />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <ContactPage />
    </main>
  );
}
