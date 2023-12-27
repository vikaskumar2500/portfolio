import taskify from "../../public/projects/taskify.png";
import gmailClone from "../../public/projects/gmail-clone.png";
import todoList from "../../public/projects/todo-list.png";
import { Building2, GraduationCap } from "lucide-react";

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
    title: "Paisadekho",
    description:
      "I am working as a full-stack developer on this startup project for last 1 month. This is the fintech project",
    tags: ["React.js", "Next.js", "Node.js", "Drizzle", "Tailwind"],
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
    title: "Sharpener bootcamp",
    description:
      "Immediate after graduation I join Sharpener Tech for full-stack developement bootcamp in remote",
    icon: React.createElement(GraduationCap),
    date: "2023",
  },
  {
    id: 1,
    title: "Full-stack Internship",
    location: "Jaipur Rajasthan",
    description:
      "I graduated after 5 months of studying. I immediately get an internship as a frontend role",
    icon: React.createElement(Building2),
    data: "2023",
  },
];
