"use client";

import { motion } from "framer-motion";
import { GlowOrbs } from "@/components/GlowOrbs";
import { ChevronDownIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import { heroBadges, profile } from "@/data/portfolioData";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <GlowOrbs variant="hero" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        Disponible para nuevas oportunidades
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-gradient relative z-10 text-balance text-6xl font-black leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="relative z-10 mt-6 text-2xl font-medium text-slate-300 sm:text-3xl"
      >
        {profile.role}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        {heroBadges.map((badge) => (
          <span
            key={badge.label}
            className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-sky-400/40"
          >
            <span className="text-lg">{badge.icon}</span>
            {badge.label}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#proyectos"
          className="group relative overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.35)] transition hover:shadow-[0_0_60px_rgba(167,139,250,0.5)]"
        >
          <span className="relative z-10">Ver proyectos</span>
        </a>
        <a
          href="#contacto"
          className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
        >
          Contacto
        </a>
        <div className="flex items-center gap-2 pl-2">
          <a
            href={profile.github}
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400/40 hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400/40 hover:text-white"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="animate-bounce-down absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-slate-500"
      >
        <ChevronDownIcon className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
