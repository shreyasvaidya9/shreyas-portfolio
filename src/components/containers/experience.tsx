"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { SectionHeading } from "../UI";
import { experiencesData } from "@/lib/data";
import { Fragment } from "react";
import { useSectionInView } from "@/hooks";
import { useThemeContext } from "@/context/theme-context";
import { LIGHT } from "@/lib/constants";

type Props = {};

const Experience = (props: Props) => {
  const { theme } = useThemeContext();
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.5,
  });

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map(
          ({ title, location, description, icon, date }, index) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background:
                    theme === LIGHT ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === LIGHT
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={date}
                icon={icon}
                iconStyle={{
                  background: theme === LIGHT ? "white" : "#111827",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="font-normal !mt-0">{location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {description}
                </p>
              </VerticalTimelineElement>
            </Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
