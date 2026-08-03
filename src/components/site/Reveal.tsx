import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "blur" | "fade";

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
  once = true,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  once?: boolean;
  as?: "div" | "section" | "li" | "p" | "h2" | "figure" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      data-variant={variant}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Component>
  );
}
