import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import realtimeChatImg from "/public/realtimechat.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer - NeoSOFT Pvt. Ltd.",
    location: "Mumbai, Maharashtra",
    description:
      "I am working as a front-end software engineer in technologies like React, NextJS, JavaScript, TypeScript, CSS, HTML, MUI",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
  {
    title: "Associate - Accenture Solutions Pvt. Ltd.",
    location: "Mumbai, Maharashtra",
    description:
      "Performed accessibility compliance checks on client websites and developed websites that consistently met the WCAG 2.1 Guidelines.",
    icon: React.createElement(IoLogoJavascript),
    date: "2020 - 2022",
  },
  {
    title: "Web Developer - Hospitality Minds Pvt. Ltd.",
    location: "Mumbai, Maharashtra",
    description:
      "I found a job as a front-end web developer. I worked on technologies like HTML5, CSS3, Bootstrap, JavaScript, NodeJS and ExpressJS.",
    icon: React.createElement(FaCss3Alt),
    date: "2018 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Realtime Chat",
    description:
      "I worked on this project for learning purposes. Users can give send friend requests to other users and chat realtime.",
    tags: ["React", "Next.js", "TypeScript", "Redis", "Tailwind"],
    imageUrl: realtimeChatImg,
  },
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Drizzle",
  "MongoDB",
  "Redux",
  "MUI",
  "React Query",
  "Express",
  "MySQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
