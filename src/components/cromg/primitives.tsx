import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  tone = "light",
  className,
  children,
}: {
  id?: string;
  tone?: "light" | "ice" | "wine" | "wine-deep";
  className?: string;
  children: ReactNode;
}) {
  const tones = {
    light: "bg-background text-foreground",
    ice: "bg-ice text-foreground",
    wine: "bg-wine text-white texture-triangles",
    "wine-deep": "bg-wine-deep text-white texture-triangles",
  } as const;
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden scroll-mt-28 py-16 md:py-24", tones[tone], className)}
    >
      <div className="container-cro relative z-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, invert }: { children: ReactNode; invert?: boolean }) {
  return (
    <p
      className={cn(
        "mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.18em] uppercase",
        invert ? "text-gold" : "text-wine-soft",
      )}
    >
      <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  invert,
  className,
}: {
  children: ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-2xl leading-tight font-extrabold tracking-tight text-balance md:text-4xl",
        invert ? "text-white" : "text-wine",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Lead({
  children,
  invert,
  className,
}: {
  children: ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-5 max-w-3xl text-base leading-[1.75] md:text-lg",
        invert ? "text-white/80" : "text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Panel({
  children,
  className,
  invert,
}: {
  children: ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 transition-shadow duration-200 md:p-7",
        invert
          ? "border-white/15 bg-white text-foreground shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]"
          : "border-line bg-card shadow-[0_2px_14px_-10px_rgba(41,37,37,0.5)] hover:shadow-[0_10px_28px_-18px_rgba(41,37,37,0.6)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Quote({ children, invert }: { children: ReactNode; invert?: boolean }) {
  return (
    <blockquote
      className={cn(
        "mt-8 rounded-2xl border-l-4 border-gold p-6 text-base leading-[1.7] font-semibold md:text-lg",
        invert ? "bg-white/10 text-white" : "bg-wine text-white",
      )}
    >
      {children}
    </blockquote>
  );
}

export function NoteBox({ children, invert }: { children: ReactNode; invert?: boolean }) {
  return (
    <p
      className={cn(
        "mt-6 rounded-xl border border-dashed px-5 py-4 text-sm leading-[1.7]",
        invert
          ? "border-gold/50 bg-white/5 text-white/80"
          : "border-gold/70 bg-gold/10 text-foreground/80",
      )}
    >
      {children}
    </p>
  );
}

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "gold" | "onWine";
  className?: string;
  external?: boolean;
};

const linkStyles = {
  primary: "bg-wine text-white hover:bg-wine-soft",
  outline: "border border-wine/30 bg-transparent text-wine hover:bg-wine/5",
  gold: "bg-gold text-wine-deep hover:brightness-95",
  onWine: "border border-white/35 text-white hover:bg-white/10",
} as const;

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
  external = true,
}: LinkButtonProps) {
  const isAnchor = href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:");
  return (
    <a
      href={href}
      {...(external && !isAnchor ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors",
        linkStyles[variant],
        className,
      )}
    >
      {children}
      {external && !isAnchor ? <ArrowUpRight className="size-4" aria-hidden="true" /> : null}
    </a>
  );
}

export function BulletList({
  items,
  invert,
  className,
}: {
  items: readonly string[];
  invert?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn("mt-4 space-y-2.5 text-sm leading-[1.7]", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
          <span className={invert ? "text-white/85" : "text-foreground/85"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TriangleDecor({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
    />
  );
}
