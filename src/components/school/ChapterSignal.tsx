/**
 * Chapter 1 — The Signal
 * 
 * Full-viewport opening chapter with 3-stage reveal and knowledge network visualization.
 * Animation deferred to Chapter 4 completion.
 */

export function ChapterSignal() {
  return (
    <section 
      id="chapter-1" 
      data-chapter="signal"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      {/* Knowledge network placeholder — will become animated SVG */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg 
          className="h-full w-full" 
          viewBox="0 0 1200 800"
          aria-hidden="true"
        >
          {/* Sparse node field */}
          <circle cx="200" cy="150" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="450" cy="220" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="800" cy="180" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="600" cy="400" r="4" fill="var(--accent)" opacity="0.8" />
          <circle cx="300" cy="500" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="950" cy="450" r="3" fill="currentColor" opacity="0.6" />
          
          {/* Connection lines */}
          <line x1="200" y1="150" x2="450" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="450" y1="220" x2="600" y2="400" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
          <line x1="600" y1="400" x2="800" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* 3-stage reveal */}
        <div className="space-y-12">
          <p className="font-display text-3xl font-light leading-relaxed tracking-tight text-foreground/90 md:text-4xl">
            Every field begins with a question.
          </p>
          
          <p className="font-display text-3xl font-light leading-relaxed tracking-tight text-foreground/90 md:text-4xl">
            Most people are taught to search for answers.
          </p>
          
          <p className="font-display text-3xl font-light leading-relaxed tracking-tight text-foreground/90 md:text-4xl">
            Researchers learn to notice what has not yet been asked.
          </p>
        </div>

        {/* Title */}
        <div className="mt-20">
          <h1 className="font-display text-5xl font-light leading-tight tracking-tight md:text-7xl">
            Welcome to OrbitIQ Labs
            <br />
            <span className="text-accent">School of Research</span>
          </h1>
        </div>

        {/* CTAs */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#chapter-4"
            className="group inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-8 py-3 font-mono text-sm uppercase tracking-wider text-background transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            Enter the research loop
            <span className="transition-transform group-hover:translate-x-1">↓</span>
          </a>
          
          <a
            href="#chapter-6"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-8 py-3 font-mono text-sm uppercase tracking-wider text-foreground transition-all hover:border-accent/50 hover:bg-surface"
          >
            See what you will build
          </a>
        </div>
      </div>
    </section>
  );
}
