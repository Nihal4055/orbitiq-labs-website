import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MorbiusAccessForm } from "./MorbiusAccessForm";

type NavLink =
  | { label: string; to: string; params?: Record<string, string>; beta?: boolean }
  | { label: string; hash: string; beta?: boolean }
  | { label: string; dropdown: Array<{ label: string; to: string; params?: Record<string, string>; beta?: boolean }> };

const links: NavLink[] = [
  { 
    label: "Products", 
    dropdown: [
      { label: "Morbius", to: "/$slug", params: { slug: "morbius" } },
      { label: "Prometheus", to: "/$slug", params: { slug: "prometheus" }, beta: true },
      { label: "Parallax", to: "/$slug", params: { slug: "parallax" }, beta: true },
    ]
  },
  { label: "Aethel", to: "/aethel" },
  { label: "Systems", hash: "systems" },
  { label: "Data", hash: "data" },
  { label: "Research", to: "/research" },
  { label: "About", hash: "about" },
];

export function BetaPill({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "ml-2 inline-flex items-center rounded-full border border-border px-2 py-[2px] font-mono text-[9px] tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      BETA
    </span>
  );
}

function NavItem({ link, onClick }: { link: NavLink; onClick?: () => void }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const cls =
    "flex items-center font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground";
  
  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setDropdownOpen(true);
  };
  
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };
  
  if ("dropdown" in link) {
    return (
      <div className="relative" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <button className={cls}>
          {link.label}
          <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 py-2 bg-background/95 backdrop-blur-2xl border border-border/60 rounded-lg shadow-xl min-w-[160px] z-50">
            {link.dropdown.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                params={item.params as never}
                className="flex items-center px-4 py-2 text-[10px] font-mono tracking-[0.18em] text-muted-foreground uppercase hover:text-foreground hover:bg-surface/50 transition-colors"
                onClick={onClick}
              >
                {item.label}
                {item.beta && <BetaPill />}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  if ("to" in link) {
    return (
      <Link to={link.to} params={link.params as never} className={cls} onClick={onClick}>
        {link.label}
        {link.beta && <BetaPill />}
      </Link>
    );
  }
  return (
    <a href={`/#${link.hash}`} className={cls} onClick={onClick}>
      {link.label}
      {link.beta && <BetaPill />}
    </a>
  );
}

export function SiteNav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showMorbiusForm, setShowMorbiusForm] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 80);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border/60 bg-background/88 backdrop-blur-2xl"
          : "border-b border-transparent",
      )}
    >
      {/* scroll progress */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-transparent">
        <div
          className="h-full origin-left bg-accent/80"
          style={{ transform: `scaleX(${progress})`, transition: "transform 120ms linear" }}
        />
      </div>

      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center">
          <img 
            src="/paintings/company-logo-transparent.png" 
            alt="OrbitIQ Labs" 
            className="h-20 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <NavItem link={l} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button 
            variant="solid" 
            size="sm" 
            className="hidden rounded-full sm:inline-flex"
            onClick={() => setShowMorbiusForm(true)}
          >
            Try Morbius Desktop
          </Button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 transition-colors hover:bg-surface lg:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              <span className={cn("block h-px w-4 bg-foreground transition-all", open && "translate-y-[6.5px] rotate-45")} />
              <span className={cn("block h-px w-4 bg-foreground transition-all", open && "opacity-0")} />
              <span className={cn("block h-px w-4 bg-foreground transition-all", open && "-translate-y-[6.5px] -rotate-45")} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 px-6 py-6 backdrop-blur-2xl lg:hidden">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.label} className="py-3">
                <NavItem link={l} onClick={() => setOpen(false)} />
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-border/40 pt-6">
            <Button 
              variant="solid" 
              size="sm" 
              className="w-full rounded-full"
              onClick={() => {
                setOpen(false);
                setShowMorbiusForm(true);
              }}
            >
              Try Morbius Desktop
            </Button>
          </div>
        </div>
      )}

      <MorbiusAccessForm 
        isOpen={showMorbiusForm} 
        onClose={() => setShowMorbiusForm(false)} 
      />
    </header>
  );
}
