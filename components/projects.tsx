"use client";

import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section id="projects" ref={ref} className="mb-28 w-full max-w-[64rem] scroll-mt-28">
      <SectionHeader>Selected projects</SectionHeader>
      <p className="mx-auto mb-10 max-w-[40rem] text-center leading-relaxed text-gray-600 dark:text-white/70">
        AI applications, cloud services, and tools that turn everyday problems into working software.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project) => <Project key={project.title} {...project} />)}
      </div>
      <a href="https://github.com/JianHua-Deng" target="_blank" rel="noopener noreferrer" className="mx-auto mt-10 block w-fit rounded-full border border-black/10 px-6 py-3 text-sm font-medium transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 dark:border-white/20 dark:hover:bg-white/10">
        Explore more on GitHub ↗
      </a>
    </section>
  );
}
