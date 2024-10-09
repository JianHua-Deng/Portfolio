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
    link: 'https://github.com/EricLam404/CodeFest',
  },
  {
    title: "Manga Site",
    description:
      "A web application that capable of browsing and reading of Mangas using MangaDex's API",
    tags: ["React", "Node.js/Express.js"],
    imageUrl: placeholderImage,
    link: 'https://github.com/JianHua-Deng/Manga-Site',
  },
  {
    title: "Discord Music Player",
    description:
      "An Discord bot that is capable of streaming music in a voice chanel through Youtube",
    tags: ["Javascript"],
    imageUrl: placeholderImage,
    link: 'https://github.com/JianHua-Deng/discord-music-bot',
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