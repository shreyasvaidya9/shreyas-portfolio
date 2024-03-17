"use client";

import { Fragment } from "react";
import { Project, SectionHeading } from "../UI";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/hooks";

type Props = {};

const Projects = (props: Props) => {
  const { ref } = useSectionInView({
    sectionName: "Projects",
    threshold: 0.5,
  });

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
