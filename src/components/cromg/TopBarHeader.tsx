import { useEffect, useState } from "react";
import {
  Building2,
  FileSearch,
  LayoutGrid,
  Accessibility,
  Menu,
  MapPin,
  Lock,
  Wrench,
  ShieldAlert,
  X,
} from "lucide-react";
import { cromgConfig, navSections } from "@/config/cromg";
import { cn } from "@/lib/utils";

const topLinks = [
  { label: "Portal da Transparência", href: cromgConfig.links.transparencia, Icon: Building2 },
  { label: "Fiscalização e Denúncia", href: cromgConfig.links.denuncias, Icon: FileSearch },
  { label: "Serviços Online", href: cromgConfig.links.servicos, Icon: LayoutGrid },
  { label: "Acessibilidade", href: cromgConfig.links.acessibilidade, Icon: Accessibility },
];

export function InstitutionalBar() {
  return (
    <div className="bg-wine-deep text-white">
      <div className="container-cro flex flex-col gap-2 py-2 text-xs md:flex-row md:items-center md:justify-between">
        <p className="font-semibold tracking-wide">
          Conselho Regional de Odontologia de Minas Gerais
        </p>
        <nav aria-label="Links institucionais">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {topLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/80 transition-colors hover:text-gold"
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur transition-all duration-300",
        scrolled ? "shadow-[0_6px_24px_-18px_rgba(41,37,37,0.7)]" : "",
      )}
    >
      <div
        className={cn(
          "container-cro flex items-center justify-between gap-4 transition-all duration-300",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <a href="#inicio" className="flex items-center gap-3">
          <span
            className="grid size-10 shrink-0 place-items-center rounded-lg bg-wine text-sm font-black text-white"
            aria-hidden="true"
          >
            CRO
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-wine">CRO-MG</span>
            <span className="block text-[11px] text-muted-foreground">
              Representante Municipal
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-[13px] font-semibold">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-foreground/75 transition-colors hover:text-wine"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={cromgConfig.links.delegacias}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-xl bg-wine px-4 text-[13px] font-bold text-white transition-colors hover:bg-wine-soft md:inline-flex"
          >
            <MapPin className="size-4" aria-hidden="true" />
            Minha Delegacia
          </a>
          <span
            title="Em desenvolvimento"
            aria-disabled="true"
            className="hidden min-h-11 cursor-not-allowed items-center gap-2 rounded-xl border border-line px-4 text-[13px] font-bold text-muted-foreground xl:inline-flex"
          >
            <Lock className="size-4" aria-hidden="true" />
            Área do Representante
            <span className="rounded-md bg-ice px-1.5 py-0.5 text-[10px] tracking-wide uppercase">
              Acesso restrito
            </span>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-xl border border-line text-wine lg:hidden"
          >
            {open ? <Menu className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-background lg:hidden">
          <nav aria-label="Navegação móvel" className="container-cro py-3">
            <ul className="grid gap-1 text-sm font-semibold">
              {navSections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-foreground/80 hover:bg-ice hover:text-wine"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={cromgConfig.links.delegacias}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block rounded-lg bg-wine px-3 py-3 text-center text-white"
                >
                  Minha Delegacia
                </a>
              </li>
              <li className="px-3 py-2 text-xs text-muted-foreground">
                Área do Representante — em desenvolvimento (acesso restrito).
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function OnThisPage() {
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-label="Nesta página"
      className="pointer-events-none fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 xl:block"
    >
      <div className="pointer-events-auto rounded-2xl border border-line bg-background/90 p-4 shadow-[0_8px_30px_-24px_rgba(41,37,37,0.9)] backdrop-blur">
        <p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
          Nesta página
        </p>
        <ul className="space-y-1.5 text-xs font-semibold">
          {navSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors",
                  active === s.id
                    ? "bg-wine/5 text-wine"
                    : "text-muted-foreground hover:text-wine",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rotate-45",
                    active === s.id ? "bg-gold" : "bg-line",
                  )}
                  aria-hidden="true"
                />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function MobileQuickBar() {
  const items = [
    { label: "Delegacia", href: cromgConfig.links.delegacias, Icon: MapPin, external: true },
    { label: "Denúncia", href: cromgConfig.links.denuncias, Icon: ShieldAlert, external: true },
    { label: "Ferramentas", href: "#ferramentas", Icon: Wrench, external: false },
  ];
  return (
    <nav
      aria-label="Atalhos rápidos"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-background/97 backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-3">
        {items.map(({ label, href, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-bold text-wine"
            >
              <Icon className="size-5" aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent"
      role="progressbar"
      aria-label="Progresso de leitura"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="h-full bg-gold transition-[width]" style={{ width: `${progress}%` }} />
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed right-4 bottom-20 z-50 grid size-11 place-items-center rounded-full bg-wine text-white shadow-lg transition-colors hover:bg-wine-soft md:bottom-6"
    >
      <X className="hidden" aria-hidden="true" />
      <span aria-hidden="true" className="-mt-0.5 text-lg">
        ↑
      </span>
    </button>
  );
}