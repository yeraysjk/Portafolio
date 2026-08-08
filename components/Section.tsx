import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </section>
  );
}
