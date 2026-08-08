"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/portfolioData";

export function ExperienceSection() {
  return (
    <Section id="experiencia">
      <SectionHeading eyebrow="Experiencia" title="Cómo he llegado hasta aquí." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {experience.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass group flex flex-col gap-4 rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_25px_70px_rgba(167,139,250,0.15)]"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/0 text-3xl transition duration-300 group-hover:scale-110">
              {item.icon}
            </span>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="text-sm leading-6 text-slate-400">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-medium text-slate-300"
      >
        🎯 Buscando mi primera oportunidad profesional como desarrollador.
      </motion.div>
    </Section>
  );
}
