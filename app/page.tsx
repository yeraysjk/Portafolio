import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { TechSection } from "@/components/TechSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030308] text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-xs uppercase tracking-[0.3em] text-slate-600 sm:px-8 lg:px-10">
        Diseñado y construido por Yeray Priede
      </footer>
    </div>
  );
}
