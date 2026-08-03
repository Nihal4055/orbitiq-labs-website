import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Node = { x: number; y: number; r: number; a: number; speed: number; size: number };

/** Ambient node-graph / orbital canvas. Lightweight 2D canvas, no WebGL. */
export function OrbitField({
  className,
  density = 46,
  accentVar = "--morbius",
}: {
  className?: string;
  density?: number;
  accentVar?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const accent =
      getComputedStyle(document.documentElement).getPropertyValue(accentVar).trim() ||
      "oklch(0.7 0.145 245)";

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const count = window.innerWidth < 768 ? Math.round(density * 0.5) : density;
    const nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    for (let i = 0; i < count; i++) {
      const ring = 0.18 + Math.random() * 0.42;
      nodes.push({
        x: 0,
        y: 0,
        r: ring,
        a: Math.random() * Math.PI * 2,
        speed: (0.00006 + Math.random() * 0.00012) * (Math.random() > 0.75 ? -1 : 1),
        size: 0.6 + Math.random() * 1.6,
      });
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const scale = Math.min(w, h);

      for (const n of nodes) {
        const a = n.a + t * n.speed;
        n.x = cx + Math.cos(a) * n.r * scale * 1.15;
        n.y = cy + Math.sin(a) * n.r * scale * 0.62;
      }

      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          const max = scale * 0.16;
          if (d < max) {
            ctx.globalAlpha = (1 - d / max) * 0.22;
            ctx.strokeStyle = accent;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.globalAlpha = 0.75;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // orbital hairline rings
      ctx.globalAlpha = 0.14;
      ctx.strokeStyle = accent;
      for (const r of [0.28, 0.46, 0.62]) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, r * scale * 1.15, r * scale * 0.62, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    if (reduced) draw(0);
    else raf = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density, accentVar]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}