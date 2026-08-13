/**
 * Chapter 2 — The Problem
 * 
 * Sticky two-column layout: left visual changes state as right column scrolls through 4 steps.
 * Pin behavior deferred to Chapter 4 completion.
 */

export function ChapterProblem() {
  const steps = [
    {
      id: 1,
      copy: (
        <>
          The literature is fragmented.
          <br />
          The tools are scattered.
          <br />
          The standards are rarely explained.
        </>
      ),
      visualState: "scattered"
    },
    {
      id: 2,
      copy: (
        <>
          You can complete a syllabus without ever discovering a problem.
          <br />
          You can learn a method without knowing when it should be trusted.
        </>
      ),
      visualState: "checklist"
    },
    {
      id: 3,
      copy: (
        <>
          A question becomes a hypothesis.
          <br />
          A hypothesis becomes an experiment.
          <br />
          An experiment fails.
          <br />
          The failure sharpens the question.
        </>
      ),
      visualState: "loop-forming"
    },
    {
      id: 4,
      copy: (
        <>
          The School exists to make that loop accessible, structured, and rigorous.
        </>
      ),
      visualState: "connected"
    }
  ];

  return (
    <section 
      id="chapter-2" 
      data-chapter="problem"
      className="relative min-h-screen border-t border-border py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left: Visual workspace (will become sticky with state changes) */}
          <div className="relative flex items-center justify-center lg:sticky lg:top-20 lg:h-[70vh]">
            <div className="relative h-full w-full max-w-md">
              {/* Placeholder workspace visualization */}
              <div className="flex h-full flex-col items-center justify-center gap-6 rounded-2xl border border-border/40 bg-surface/20 p-8">
                <div className="h-16 w-16 rounded-lg border border-border/60 bg-surface/40" />
                <div className="h-24 w-full rounded-lg border border-border/60 bg-surface/40" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 w-full rounded-lg border border-border/60 bg-surface/40" />
                  <div className="h-20 w-full rounded-lg border border-border/60 bg-surface/40" />
                </div>
                <div className="h-12 w-3/4 rounded-full border border-accent/40 bg-accent/10" />
              </div>
            </div>
          </div>

          {/* Right: Scrolling narrative */}
          <div className="space-y-[60vh]">
            {steps.map((step) => (
              <div
                key={step.id}
                data-step={step.id}
                className="flex min-h-[40vh] items-center"
              >
                <div className="space-y-6">
                  <span className="label-mono text-muted-foreground">
                    Step {step.id.toString().padStart(2, '0')}
                  </span>
                  <p className="font-display text-2xl font-light leading-relaxed tracking-tight text-foreground md:text-3xl">
                    {step.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
