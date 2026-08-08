"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { technologies } from "@/data/portfolioData";

const glowColors = [
  "hover:border-sky-400/50 hover:shadow-[0_20px_60px_rgba(56,189,248,0.2)]",
  "hover:border-violet-400/50 hover:shadow-[0_20px_60px_rgba(167,139,250,0.2)]",
  "hover:border-fuchsia-400/50 hover:shadow-[0_20px_60px_rgba(232,121,249,0.2)]",
  "hover:border-emerald-400/50 hover:shadow-[0_20px_60px_rgba(52,211,153,0.2)]",
];

export function TechSection() {
  return (
    <Section id="tecnologias">
      <SectionHeading eyebrow="Tecnologías" title="Mi stack diario." />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: (index % 5) * 0.06 }}
            whileHover={{ y: -6, scale: 1.04 }}
            className={`glass flex flex-col items-center justify-center gap-3 rounded-3xl px-4 py-8 text-center transition-colors duration-300 ${glowColors[index % glowColors.length]}`}
          >
            <span className="text-4xl">{tech.icon}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-200">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
