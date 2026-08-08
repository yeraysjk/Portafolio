"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { projects } from "@/data/portfolioData";

export function ProjectsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 400, behavior: "smooth" });
  };

  return (
    <Section id="proyectos">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="Proyectos" title="Lo que he construido." />
        <div className="mb-12 hidden gap-3 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-sky-400/40 hover:text-white"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Siguiente"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-sky-400/40 hover:text-white"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        ref={scrollerRef}
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>

      <p className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-slate-500 sm:hidden">
        Desliza para ver más →
      </p>
    </Section>
  );
}
