"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../UI";
import { useSectionInView } from "@/hooks";

type Props = {};

const aboutSectionVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.175,
    },
  },
};

const About = (props: Props) => {
  const { ref } = useSectionInView({
    sectionName: "About",
    threshold: 1,
  });

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      variants={aboutSectionVariants}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electronics</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, TypeScript and JavaScript
        </span>
        . I am also familiar with MySQL, Drizzle and Prisma. I am always looking
        to learn new technologies. I am currently working at NeoSOFT Pvt. Ltd.
        as a Software Engineer.
      </p>
      <p>
        <span className="italic">When {"I'm"} not coding</span>, I enjoy
        watching movies and anime. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">MySQL and Next.js</span>.
      </p>
    </motion.section>
  );
};

export default About;
