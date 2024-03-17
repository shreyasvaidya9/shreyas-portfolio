import { SectionDivider } from "@/components/Decorative";
import {
  About,
  Contact,
  Experience,
  Hero,
  Projects,
  Skills,
} from "@/components/containers";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
