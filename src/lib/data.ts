import taskify from "../../public/projects/taskify.png";
import gmailClone from "../../public/projects/gmail-clone.png";
import todoList from "../../public/projects/todo-list.png";
import { GraduationCap } from "lucide-react";

import React from "react";
export const linksData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Projects",
    path: "/#projects",
  },
  {
    title: "Skills",
    path: "/#skills",
  },

  {
    title: "Experience",
    path: "/#experience",
  },
  {
    title: "Contact",
    path: "/#contact",
  },
];

export const projectData = [
  {
    id: 0,
    title: "Taskify Clone",
    description:
      "A full-stack project crafted by the cutting-edge technologies where user can experiences the Board creation, Drag and Drop functionality along with see Activity and manage subscription",
    tags: [
      "React.js",
      "Next.js",
      "Planetscale",
      "Tailwind",
      "Prisma",
      "Stripe",
    ],
    imageUrl: taskify,
  },

  {
    id: 1,
    title: "Gmail Clone",
    description:
      " Clone of Gmail where you can send messages to other users along with authentication features is included",
    tags: ["React.js", "Next.js", "Firebase", "Tailwind"],
    imageUrl: gmailClone,
  },
  {
    id: 2,
    title: "Todo List",
    description:
      "This is the basic project where user can add there currect todos along with they can also manage their todos as per convenients",
    tags: ["React.js", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: todoList,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "SQL",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Firebase",
];

export const experiencesData = [
  {
    id: 0,
    title: "SOFTWARE DEVELOPER",
    location: "Pratap Nagar, Jaipur, Rajasthan",
    description:
      "I started my career as a frontend developer but have since transitioned into a full-stack developer role. I have extensive experience working on both web and mobile applications, contributing to various projects with a focus on delivering high-quality user experiences.",

    icon: React.createElement(GraduationCap),
    date: "Oct 2023",
  },
  {
    id: 1,
    title: "SHARPENER BOOTCAMP",
    location: "Remote",
    description:
      "Immediately after graduation, I joined Sharpener Tech for a full-stack development bootcamp conducted remotely. During the program, I gained comprehensive skills in full-stack development. Now, equipped with practical experience and a solid foundation, I am eager to apply my knowledge in real-world projects.",
    icon: React.createElement(GraduationCap),
    date: "May 2023",
  },
];
