"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutFacts, bio, profile } from "@/data/portfolioData";

export function AboutSection() {
  return (
    <Section id="sobre-mi">
      <SectionHeading eyebrow="Sobre mí" title="Quién soy, en una mirada." />
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/10"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-sky-500/40 via-violet-500/30 to-fuchsia-500/40 opacity-60 blur-2xl transition group-hover:opacity-90" />
          <Image
            src={profile.profileImage}
            alt={`Foto de ${profile.name}`}
            width={640}
            height={720}
            className="relative h-full w-full min-h-[320px] rounded-[2rem] object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-lg font-bold text-white">{profile.name}</p>
            <p className="text-sm text-slate-300">{profile.role}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass flex flex-col justify-center gap-8 rounded-[2rem] p-8 sm:p-10"
        >
          <p className="text-balance text-xl font-medium leading-relaxed text-slate-200 sm:text-2xl">
            {bio}
          </p>

          <div className="flex flex-wrap gap-3">
            {aboutFacts.map((fact) => (
              <span
                key={fact.label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-sky-400/40"
              >
                <span className="text-base">{fact.icon}</span>
                {fact.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
