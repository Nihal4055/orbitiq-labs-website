import { useEffect, useState } from "react";

/**
 * Animated Founder's Message Component
 * Elegant slideshow with fading quotes, transitions, and visual storytelling
 */

interface Slide {
  type: "quote" | "image" | "title" | "closing";
  content?: string;
  author?: string;
  subtext?: string;
  image?: string;
}

const SLIDES: Slide[] = [
  {
    type: "title",
    content: "A Message from the Founder",
    subtext: "On Building the Future of Scientific Intelligence",
  },
  {
    type: "quote",
    content: "We built OrbitIQ because we believe science deserves better tools.",
    author: "Founder, OrbitIQ Labs",
  },
  {
    type: "quote",
    content: "Research shouldn't be bottlenecked by manual literature reviews, disconnected data, or opaque reasoning.",
  },
  {
    type: "image",
    content: "Built by a Scientist",
    subtext: "Real expertise meets autonomous intelligence",
    image: "/paintings/founder-portrait.jpg",
  },
  {
    type: "quote",
    content: "Every breakthrough we build — Morbius, Prometheus, Parallax, Aethel — exists to solve one problem: scientific progress takes too long.",
  },
  {
    type: "quote",
    content: "The gap between hypothesis and validation. Between literature and insight. Between question and answer.",
  },
  {
    type: "image",
    content: "Powered by AI",
    subtext: "Built by scientists who understand the craft",
    image: "/paintings/nihal.jpg",
  },
  {
    type: "quote",
    content: "AI shouldn't just answer questions. It should generate hypotheses, design experiments, critique its own reasoning, and operate in multi-step research loops.",
  },
  {
    type: "quote",
    content: "We're not building chatbots. We're building autonomous research partners — systems that think in causal graphs, reason across modalities, and ground every claim in evidence.",
  },
  {
    type: "quote",
    content: "This is AI built by scientists, for scientists — where domain expertise meets frontier technology.",
  },
  {
    type: "closing",
    content: "Join us in accelerating discovery.",
    subtext: "OrbitIQ Labs · Research that compounds",
  },
];

export function FounderMessage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 5000; // 5 seconds per slide
  const PROGRESS_INTERVAL = 50; // Update progress every 50ms

  useEffect(() => {
    if (isPaused) return;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / PROGRESS_INTERVAL));
      });
    }, PROGRESS_INTERVAL);

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      setProgress(0);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressTimer);
      clearInterval(slideTimer);
    };
  }, [isPaused]);

  const slide = SLIDES[currentSlide];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface/20 to-background"
      onClick={togglePause}
      role="button"
      tabIndex={0}
      aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-violet-500/5 via-transparent to-transparent" />

      {/* Slide Content */}
      <div className="relative z-10 w-full max-w-4xl px-12">
        {slide.type === "title" && (
          <div
            key={currentSlide}
            className="animate-fade-in text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
              <span className="label-mono text-violet-400">Founder's Message</span>
            </div>
            <h2 className="font-display text-5xl font-light leading-tight tracking-tight">
              {slide.content}
            </h2>
            {slide.subtext && (
              <p className="mt-6 text-lg text-muted-foreground">{slide.subtext}</p>
            )}
          </div>
        )}

        {slide.type === "quote" && (
          <div
            key={currentSlide}
            className="animate-fade-in text-center"
          >
            <div className="relative">
              <span className="absolute -left-8 -top-4 font-display text-8xl text-violet-400/20">"</span>
              <p className="font-display text-3xl font-light leading-relaxed tracking-tight">
                {slide.content}
              </p>
              <span className="absolute -bottom-12 -right-8 font-display text-8xl text-violet-400/20">"</span>
            </div>
            {slide.author && (
              <p className="mt-10 text-sm text-muted-foreground">{slide.author}</p>
            )}
          </div>
        )}

        {slide.type === "image" && (
          <div
            key={currentSlide}
            className="animate-fade-in"
          >
            <div className="relative mx-auto aspect-[4/3] max-w-2xl overflow-hidden rounded-2xl border border-border/40">
              <img
                src={slide.image}
                alt={slide.content || "Founder message visual"}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h3 className="font-display text-3xl font-light text-white">
                  {slide.content}
                </h3>
                {slide.subtext && (
                  <p className="mt-3 text-sm text-white/80">{slide.subtext}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {slide.type === "closing" && (
          <div
            key={currentSlide}
            className="animate-fade-in text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            </div>
            <h2 className="font-display text-4xl font-light leading-tight tracking-tight text-violet-400">
              {slide.content}
            </h2>
            {slide.subtext && (
              <p className="mt-6 text-base text-muted-foreground">{slide.subtext}</p>
            )}
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/20">
        <div
          className="h-full bg-violet-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-violet-400"
                : "w-2 bg-border/60 hover:bg-border"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Pause/Play Indicator */}
      <div className="absolute right-6 top-6 z-20">
        <div className="flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-3 py-1.5 backdrop-blur-sm">
          {isPaused ? (
            <>
              <div className="h-2 w-2">
                <svg viewBox="0 0 8 10" fill="currentColor" className="text-violet-400">
                  <polygon points="0,0 8,5 0,10" />
                </svg>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                Paused
              </span>
            </>
          ) : (
            <>
              <div className="flex gap-0.5">
                <div className="h-2 w-0.5 bg-violet-400" />
                <div className="h-2 w-0.5 bg-violet-400" />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                Playing
              </span>
            </>
          )}
        </div>
      </div>

      {/* Click hint */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
        <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
          Click to {isPaused ? "resume" : "pause"}
        </p>
      </div>
    </div>
  );
}
