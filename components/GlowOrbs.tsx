type GlowOrbsProps = {
  variant?: "hero" | "subtle";
};

export function GlowOrbs({ variant = "subtle" }: GlowOrbsProps) {
  const size = variant === "hero" ? "h-[32rem] w-[32rem]" : "h-96 w-96";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div
        className={`animate-float-a absolute -left-32 top-0 ${size} rounded-full bg-sky-500/25 blur-[120px]`}
      />
      <div
        className={`animate-float-b absolute -right-32 top-1/3 ${size} rounded-full bg-fuchsia-500/20 blur-[120px]`}
      />
      {variant === "hero" && (
        <div className="animate-float-a absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />
      )}
    </div>
  );
}
