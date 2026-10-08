"use client";

import SectionHeader from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40" ref={ref} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
      <SectionHeader>About me</SectionHeader>
      <p className="mb-4">
        I am a software developer who enjoys building useful applications from the interface down to the backend.
        My work spans <span className="font-semibold">full-stack web development, AI applications, and cloud services</span>:
        translating comic pages with computer vision, building a manga reader with an AWS caching layer,
        and automating workflows with Python tools.
      </p>
      <p className="mb-4">
        I also enjoy collaborating on projects that connect technology with practical needs,
        from an AI reading companion to aspect-based sentiment analysis for an industry partner through
        <span className="font-semibold"> Break Through Tech AI</span>.
        I like understanding how a system works, improving its moving parts, and learning the tools needed to bring an idea to life.
      </p>
      <p>Outside of coding, I enjoy video games, anime, manga, and drawing.</p>
    </motion.section>
  );
}
