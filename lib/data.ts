import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import placeholderImage from "@/public/placeholderImage.png"


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
  /*
  {
    name: "Experience",
    hash: "#experience",
  },
  */
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Brainbuddy",
    description:
      "I worked with a group in Codefest hosted by Google to create a web application that is capable of generating quizzes and flashcards based on user's notes using OpenAI's API. User are also capable of saving generated quizzes and flashcards",
    tags: ["React", "Next.js", "MongoDB"],
    imageUrl: placeholderImage,
  },
  {
    title: "Manga Site",
    description:
      "A web application that capable of browsing and reading of Mangas using MangaDex's API",
    tags: ["React", "Node.js/Express.js"],
    imageUrl: placeholderImage,
  },
  {
    title: "Meal Recipe",
    description:
      "An Android application that is capable of searching different meals through MealDB's API",
    tags: ["Kotlin"],
    imageUrl: placeholderImage,
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
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;