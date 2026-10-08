"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

type ProjectProps = typeof projectsData[number];

export default function Project({ title, category, description, tags, link }: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1 1"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.article
      ref={ref}
      style={reduceMotion ? undefined : { scale, opacity }}
      className="h-full rounded-2xl border border-black/10 bg-white/70 shadow-sm transition hover:border-gray-400 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} — view repository on GitHub (opens in a new tab)`}
        className="group flex h-full flex-col rounded-2xl p-6 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 sm:p-8"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-300">{category}</p>
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mb-6 mt-3 leading-relaxed text-gray-700 dark:text-white/75">{description}</p>
        <ul className="mb-6 mt-auto flex flex-wrap gap-2" aria-label="Technologies">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full bg-gray-900/5 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-white/10 dark:text-gray-200">{tag}</li>
          ))}
        </ul>
        <span className="flex items-center gap-2 text-sm font-semibold">View on GitHub <BsArrowUpRight aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
      </a>
    </motion.article>
  );
}
