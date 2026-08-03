import { useEffect, useRef, useState } from "react";
import type { AgentSession } from "./products";

type StepStatus = "done" | "running" | "pending";

/** KDense-style live agentic streaming terminal, colorable per product. */
export function AgentTerminal({
  sessions,
  color,
  label,
}: {
  sessions: AgentSession[];
  color: string;
  label: string;
}) {
  const [sIdx, setSIdx] = useState(0);
  const [step, setStep] = useState(0);
  const [cursor, setCursor] = useState(true);
  const [typed, setTyped] = useState("");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const session = sessions[sIdx];

  useEffect(() => {
    const id = setInterval(() => setCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(session.query.slice(0, i));
      if (i >= session.query.length) clearInterval(id);
    }, 26);
    return () => clearInterval(id);
  }, [sIdx, session.query]);

  useEffect(() => {
    setStep(0);
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setStep((p) => {
        if (p >= session.steps.length - 1) {
          clearInterval(timer.current!);
          setTimeout(() => setSIdx((s) => (s + 1) % sessions.length), 2400);
          return p;
        }
        return p + 1;
      });
    }, 1500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sIdx]);

  const statusOf = (i: number): StepStatus =>
    i < step ? "done" : i === step ? "running" : "pending";

  const pct = Math.round(((step + 1) / session.steps.length) * 100);

  return (
    <div
      className="terminal-pane rounded-xl overflow-hidden shadow-2xl"
      style={{ ["--tc" as string]: color }}
    >
      {/* chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground/70">
          {label}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: color }} />
          <span className="font-mono text-[9px] tracking-widest" style={{ color }}>
            RUNNING
          </span>
        </span>
      </div>

      {/* topic */}
      <div className="px-5 pt-4 pb-2">
        <span
          className="inline-block rounded-sm border px-2.5 py-1 font-mono text-[10px] tracking-widest"
          style={{
            color,
            borderColor: `color-mix(in oklab, ${color} 35%, transparent)`,
            background: `color-mix(in oklab, ${color} 10%, transparent)`,
          }}
        >
          {session.topic}
        </span>
      </div>

      {/* query */}
      <div className="px-5 pb-4 border-b border-white/[0.08]">
        <p className="font-mono text-[11px] text-muted-foreground/60 mb-1">› query</p>
        <p className="font-mono text-sm text-foreground/90 leading-relaxed min-h-[2.4em]">
          {typed}
          <span
            className="inline-block w-[2px] h-[13px] ml-[1px] align-middle"
            style={{ background: color, opacity: cursor ? 1 : 0 }}
          />
        </p>
      </div>

      {/* steps */}
      <div className="px-5 py-3">
        {session.steps.map((s, i) => {
          const st = statusOf(i);
          return (
            <div
              key={`${sIdx}-${i}`}
              className="flex items-center gap-3 py-2.5 border-b border-white/[0.05] last:border-0"
              style={{ opacity: st === "pending" ? 0.35 : 1, transition: "opacity 600ms ease" }}
            >
              <span className="shrink-0 w-4 flex justify-center">
                {st === "done" && (
                  <svg className="w-3.5 h-3.5" style={{ color }} fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {st === "running" && (
                  <svg className="w-3.5 h-3.5" style={{ color }} viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" style={{ animation: "spin 1.4s linear infinite", transformOrigin: "center" }} />
                  </svg>
                )}
                {st === "pending" && <span className="w-3 h-3 rounded-full border border-white/20" />}
              </span>
              <span
                className="flex-1 font-mono text-[11px] tracking-wide"
                style={{ color: st === "done" ? "var(--foreground)" : st === "running" ? color : "var(--muted-foreground)" }}
              >
                {s.label}
                {st === "running" && (
                  <span className="ml-1 inline-block" style={{ animation: "terminal-blink 1s step-end infinite" }}>▌</span>
                )}
              </span>
              {s.meta && st === "done" && (
                <span className="shrink-0 font-mono text-[10px] text-muted-foreground/60 tracking-wider">
                  {s.meta}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* footer */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.08] bg-white/[0.02]">
        <span className="font-mono text-[9px] tracking-widest text-muted-foreground/50">
          {step + 1}/{session.steps.length} STEPS
        </span>
        <div className="flex-1 mx-4 h-px bg-white/10 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
        </div>
        <span className="font-mono text-[9px] tracking-widest text-muted-foreground/50">{pct}%</span>
      </div>
    </div>
  );
}
