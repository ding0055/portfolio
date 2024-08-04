import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import guiImg from "@/public/6harmoncis_GUI.png";
import webImg from "@/public/6harmoncis_website.png";
import pokeImg from "@/public/pokemon.png";

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
    title: "SunnyFuture Ltd | Junior Web Developer",
    location: "Ottawa, ON",
    description:
      "I worked here as a junior front-end developer intern for 4 months, building websites and web apps.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "6Harmonics Inc. | Software Developer",
    location: "Ottawa, ON",
    description:
      "I worked as a Software Developer for 4 years. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "6Harmonics Inc. | Senior Software Developer",
    location: "Ottawa, ON",
    description:
      "I was promoted to Senior Software Developer after 4 years of working at 6Harmonics, leading a team of 3 developers.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TVWS radio WebGUI",
    description:
      "I worked as a full-stack developer on this project for 6 years. Keep adding new features and improving system stability.",
    tags: ["JavaScript", "HTML", "CSS", "ReRESTful API", "Node.js"],
    imageUrl: guiImg,
  },
  {
    title: "6harmonics",
    description:
      "Website for the company. Displaying products and services. Also, a blog for the company to post news and updates.",
    tags: ["React", "JavaScript", "Next.js"],
    imageUrl: webImg,
  },
  {
    title: "Pokemon card page",
    description:
      "A public web app for quick serach of pokemon cards. The app is built with Next.js and Tailwind.",
    tags: ["React", "Next.js", "API", "Tailwind", "TypeScript"],
    imageUrl: pokeImg,
  },
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
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
