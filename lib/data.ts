export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

export const projectsData = [
  {
    title: "MikanCli",
    category: "Developer tooling & automation",
    description: "A Python CLI that turns anime search results and subgroup RSS feeds into qBittorrent download rules. Includes guided feed previews, episode and keyword filters, JSON rule drafts, and API verification that submitted rules were saved.",
    tags: ["Python", "CLI", "RSS", "REST APIs", "pipx"],
    link: "https://github.com/JianHua-Deng/MikanCli",
  },
  {
    title: "DexScape",
    category: "Full-stack web application",
    description: "A responsive MangaDex client for browsing manga and webtoons, searching titles and authors, reading chapters, and bookmarking favorite series. Combines a React interface with Supabase authentication and a custom AWS caching proxy.",
    tags: ["React", "Supabase", "PostgreSQL", "MUI", "MangaDex API"],
    link: "https://github.com/JianHua-Deng/DexScape",
  },
  {
    title: "ComicTranslate AI",
    category: "Computer vision & AI",
    description: "A full-stack comic translation app that detects speech bubbles, extracts text with OCR, removes the original lettering, and renders translated text back onto the page. Supports batch image uploads and Docker workflows for CPU or GPU processing.",
    tags: ["React", "TypeScript", "Python", "FastAPI", "Docker"],
    link: "https://github.com/JianHua-Deng/comic-translator-ai",
  },
  {
    title: "FocusFlow",
    category: "Collaborative AI application",
    description: "An AI reading companion built with a team to help readers stay oriented in dense academic papers. Uses document position and reading behavior to offer explanations tied to the current section and the paper’s broader argument.",
    tags: ["React", "TypeScript", "Python", "FastAPI", "PDF.js"],
    link: "https://github.com/DarlynGomez/FocusFlow",
  },
  {
    title: "Cadence · Review Sentiment Analysis",
    category: "Industry collaboration · Break Through Tech AI",
    description: "Worked on an aspect-based sentiment analysis pipeline for a Cadence industry project, turning Amazon product reviews into feature-level insights. My contributions focused on model selection, hyperparameter tuning, training, and optimization; the team presented insights through a Streamlit dashboard.",
    tags: ["Python", "NLP", "BERT", "Machine Learning", "Streamlit"],
    link: "https://github.com/aaryaamoharir/cadence_2B_bttai",
  },
  {
    title: "Brainbuddy",
    category: "Collaborative hackathon project",
    description: "Built with a team at a Google-hosted Codefest, Brainbuddy turns study notes into quizzes and flashcards using the OpenAI API. Users can save generated study materials for later review.",
    tags: ["React", "Next.js", "MongoDB", "OpenAI API", "Auth0"],
    link: "https://github.com/EricLam404/CodeFest",
  },
] as const;

export const skillsData = [
  "JavaScript", "TypeScript", "Python", "HTML", "CSS", "React", "Next.js",
  "Node.js", "Express", "FastAPI", "Tailwind CSS", "PostgreSQL", "Supabase",
  "MongoDB", "AWS S3", "DynamoDB", "CloudFront", "Docker", "Git",
  "Machine Learning", "NLP", "OCR", "Framer Motion",
] as const;
