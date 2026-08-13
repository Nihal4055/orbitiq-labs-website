/**
 * Chapter 3 — The Invitation
 * 
 * Background shift + 3-profile radial selector with keyboard-operable interaction.
 * Uses GSAP for scroll-triggered fade-ins on intro/closing sections.
 */

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ProfileId = "explorer" | "builder" | "researcher";

interface Profile {
  id: ProfileId;
  label: string;
  description: string;
  ctaLabel: string;
  ctaTarget: string;
}

const profiles: Profile[] = [
  {
    id: "explorer",
    label: "The Explorer",
    description: "You are curious about research but do not yet have a defined problem. You will learn how to move from interest to a defensible research question.",
    ctaLabel: "Discover the first cohort",
    ctaTarget: "#chapter-5"
  },
  {
    id: "builder",
    label: "The Builder",
    description: "You can code, model, analyse, or design — but want to apply those skills to meaningful research problems. You will turn technical ability into reproducible work.",
    ctaLabel: "See the research tracks",
    ctaTarget: "#chapter-7"
  },
  {
    id: "researcher",
    label: "The Emerging Researcher",
    description: "You already read papers or work on a project, but want stronger methodology, feedback, and research direction. You will develop your work through structured critique and iteration.",
    ctaLabel: "View the expected outputs",
    ctaTarget: "#chapter-6"
  }
];

export function ChapterInvitation() {
  const [selected, setSelected] = useState<ProfileId | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;

    const intro = sectionRef.current.querySelector('[data-intro]');
    const selector = sectionRef.current.querySelector('[data-selector]');
    const closing = sectionRef.current.querySelector('[data-closing]');

    if (intro) {
      gsap.fromTo(
        intro,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: intro,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    if (selector) {
      gsap.fromTo(
        selector.querySelectorAll('[data-profile]'),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: selector,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    if (closing) {
      gsap.fromTo(
        closing,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: closing,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, [prefersReducedMotion]);

  const handleKeyDown = (e: React.KeyboardEvent, profileId: ProfileId, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelected(profileId);
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % profiles.length;
      document.getElementById(`profile-${profiles[nextIndex].id}`)?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + profiles.length) % profiles.length;
      document.getElementById(`profile-${profiles[prevIndex].id}`)?.focus();
    }
  };

  const selectedProfile = profiles.find(p => p.id === selected);

  return (
    <section 
      ref={sectionRef}
      id="chapter-3" 
      data-chapter="invitation"
      className="relative min-h-screen border-t border-border py-32"
      style={{ 
        background: 'linear-gradient(180deg, var(--background) 0%, oklch(0.14 0.042 268) 100%)'
      }}
    >
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Intro */}
        <div data-intro className="mb-20 text-center">
          <p className="font-display text-3xl font-light leading-relaxed tracking-tight text-foreground md:text-4xl">
            You do not need to arrive as a researcher.
            <br />
            You need to arrive willing to investigate.
          </p>
        </div>

        {/* Profile selector */}
        <div 
          data-selector
          className="mb-16"
          role="radiogroup"
          aria-label="Choose your research profile"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {profiles.map((profile, index) => (
              <button
                key={profile.id}
                data-profile
                id={`profile-${profile.id}`}
                role="radio"
                aria-checked={selected === profile.id}
                tabIndex={selected === profile.id || (selected === null && index === 0) ? 0 : -1}
                onClick={() => setSelected(profile.id)}
                onKeyDown={(e) => handleKeyDown(e, profile.id, index)}
                className={`
                  group relative rounded-2xl border p-8 text-left transition-all
                  ${selected === profile.id 
                    ? 'border-accent bg-accent/10 shadow-lg' 
                    : 'border-border/60 bg-surface/20 hover:border-accent/40 hover:bg-surface/30'
                  }
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
                `}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-xl font-light tracking-tight">
                    {profile.label}
                  </h3>
                  <div className={`
                    h-4 w-4 rounded-full border-2 transition-colors
                    ${selected === profile.id ? 'border-accent bg-accent' : 'border-border'}
                  `}>
                    {selected === profile.id && (
                      <div className="h-full w-full rounded-full bg-background scale-50" />
                    )}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {profile.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Selected profile CTA */}
        {selectedProfile && (
          <div className="text-center">
            <a
              href={selectedProfile.ctaTarget}
              className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-8 py-3 font-mono text-sm uppercase tracking-wider text-background transition-all hover:bg-accent/90 hover:shadow-lg"
            >
              {selectedProfile.ctaLabel}
            </a>
          </div>
        )}

        {/* Closing statement */}
        <div data-closing className="mt-20 text-center">
          <p className="font-display text-2xl font-light leading-relaxed tracking-tight text-foreground/90 md:text-3xl">
            The School is not for passive consumption.
            <br />
            It is for people who want to leave evidence of having investigated something.
          </p>
        </div>

      </div>
    </section>
  );
}
