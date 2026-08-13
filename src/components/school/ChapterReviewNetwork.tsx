/**
 * Chapter 8 — The People Layer / Review Network
 * 
 * Three mentorship modes + review network statement.
 * No named mentors yet (using "assembling network" default per SOP).
 */

const modes = [
  {
    id: 1,
    title: "Research direction",
    description: "Help you decide whether the question is worth pursuing."
  },
  {
    id: 2,
    title: "Technical critique",
    description: "Challenge your assumptions, methods, baselines, and evaluation."
  },
  {
    id: 3,
    title: "Communication review",
    description: "Help you make the work legible, defensible, and useful."
  }
];

export function ChapterReviewNetwork() {
  return (
    <section 
      id="chapter-8" 
      data-chapter="review-network"
      className="relative min-h-screen border-t border-border py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
            The People Layer
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            How guidance works
          </p>
        </div>

        {/* Three modes */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {modes.map((mode) => (
            <div
              key={mode.id}
              className="rounded-xl border border-border/60 bg-surface/20 p-8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-sm text-accent">
                {mode.id}
              </div>
              <h3 className="mb-3 font-display text-xl font-light tracking-tight">
                {mode.title}
              </h3>
              <p className="leading-relaxed text-foreground/70">
                {mode.description}
              </p>
            </div>
          ))}
        </div>

        {/* Review network statement */}
        <div className="rounded-2xl border border-border/60 bg-surface/20 p-10 text-center">
          <p className="font-display text-xl font-light leading-relaxed tracking-tight text-foreground/90 md:text-2xl">
            The School is assembling a review network across AI, infrastructure, climate technology,
            and scientific computing.
          </p>
        </div>

        {/* Note: Mentor grid would go here when confirmed names/photos are available */}
        {/* Layout built to support optional mentor data without rebuild */}

      </div>
    </section>
  );
}
