import { useEffect, useRef } from "react";

/**
 * Scroll-driven parallax. Sets a `--py` CSS variable (px) on the ref element
 * based on its position in the viewport. Pair with the `.parallax-layer`
 * utility (transform: translate3d(0, var(--py), 0)).
 *
 * strength: fraction of viewport height to travel across the full scroll pass.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 0.12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (below viewport) .. 0 (centered) .. 1 (above)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      el.style.setProperty("--py", `${(-progress * strength * vh).toFixed(1)}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return ref;
}
