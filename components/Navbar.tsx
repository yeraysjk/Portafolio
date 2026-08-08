"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="fixed top-0 z-50 w-full">
      <motion.div
        style={{ scaleX }}
        className="h-[2px] w-full origin-left bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400"
      />
      <div className="border-b border-white/5 bg-[#030308]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-violet-400 to-fuchsia-400 text-sm font-bold text-slate-950 transition group-hover:scale-105">
              YP
            </span>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.3em] text-white sm:inline">
              Yeray
            </span>
          </a>
          <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-slate-300 sm:gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white sm:px-4"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
