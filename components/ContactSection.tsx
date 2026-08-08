"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { profile } from "@/data/portfolioData";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: MailIcon },
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
];

export function ContactSection() {
  return (
    <Section id="contacto" className="justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
          Contacto
        </span>
        <h2 className="mt-4 text-balance text-5xl font-black tracking-tight text-white sm:text-7xl">
          Hablemos.
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Abierto a oportunidades como desarrollador junior.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="glass group flex h-16 w-16 items-center justify-center rounded-2xl text-slate-200 transition duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:text-white hover:shadow-[0_20px_50px_rgba(56,189,248,0.25)]"
            >
              <Icon className="h-6 w-6 transition group-hover:scale-110" />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        action={`mailto:${profile.email}`}
        method="post"
        encType="text/plain"
        className="glass mx-auto mt-10 grid w-full max-w-xl gap-4 rounded-[2rem] p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            id="name"
            name="name"
            placeholder="Nombre"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
          />
        </div>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Mensaje"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
        />
        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:shadow-[0_0_50px_rgba(167,139,250,0.4)]"
        >
          Enviar mensaje
        </button>
      </motion.form>
    </Section>
  );
}
