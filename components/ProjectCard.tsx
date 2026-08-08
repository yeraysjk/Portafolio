import Link from "next/link";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  glyph: string;
  gradient: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  glyph,
  gradient,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full w-[85vw] max-w-sm shrink-0 snap-center flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(4,8,22,0.45)] transition duration-300 hover:-translate-y-2 hover:border-white/25 sm:w-[380px]">
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 bg-grid opacity-40" />
        <span className="absolute inset-0 flex items-center justify-center text-7xl drop-shadow-lg transition duration-500 group-hover:scale-110">
          {glyph}
        </span>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#030308] to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={demoUrl}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Demo <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
          <Link
            href={githubUrl}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
          >
            <GithubIcon className="h-3.5 w-3.5" /> GitHub
          </Link>
        </div>
      </div>
    </article>
  );
}
