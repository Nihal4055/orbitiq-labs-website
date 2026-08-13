/**
 * Chapter Progress Rail
 * 
 * Desktop: Fixed vertical rail (right edge)
 * Mobile: Slim top progress bar + expandable chapter list
 * 
 * IntersectionObserver logic deferred to Chapter 4 completion.
 */

import { useState } from "react";

interface Chapter {
  id: string;
  number: string;
  label: string;
  anchor: string;
}

const chapters: Chapter[] = [
  { id: "signal", number: "01", label: "Signal", anchor: "#chapter-1" },
  { id: "problem", number: "02", label: "Problem", anchor: "#chapter-2" },
  { id: "invitation", number: "03", label: "Invitation", anchor: "#chapter-3" },
  { id: "loop", number: "04", label: "Loop", anchor: "#chapter-4" },
  { id: "cohort", number: "05", label: "Cohort", anchor: "#chapter-5" },
  { id: "outputs", number: "06", label: "Outputs", anchor: "#chapter-6" },
  { id: "frontiers", number: "07", label: "Frontiers", anchor: "#chapter-7" },
  { id: "people", number: "08", label: "People", anchor: "#chapter-8" },
  { id: "apply", number: "09", label: "Apply", anchor: "#chapter-9" }
];

export function ChapterProgressRail() {
  const [currentChapter, setCurrentChapter] = useState("signal");
  const [mobileExpanded, setMobileExpanded] = useState(false);

  // Placeholder - will be driven by IntersectionObserver later
  const scrollProgress = 0.15; // 0-1

  return (
    <>
      {/* Desktop: Vertical rail */}
      <nav 
        className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 lg:block"
        aria-label="Chapter navigation"
      >
        <ol className="space-y-6">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <a
                href={chapter.anchor}
                className={`
                  group flex items-center gap-4 transition-all
                  ${currentChapter === chapter.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}
                `}
                aria-current={currentChapter === chapter.id ? "true" : undefined}
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {chapter.number}
                </span>
                <div className={`
                  h-2 w-2 rounded-full transition-all
                  ${currentChapter === chapter.id 
                    ? 'w-8 bg-accent' 
                    : 'bg-border group-hover:bg-accent/50'
                  }
                `} />
                <span className={`
                  whitespace-nowrap font-mono text-xs uppercase tracking-wider transition-all
                  ${currentChapter === chapter.id 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  }
                `}>
                  {chapter.label}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Mobile: Top progress bar + expandable list */}
      <div className="fixed left-0 right-0 top-0 z-50 lg:hidden">
        {/* Progress bar */}
        <div className="h-1 bg-surface/60 backdrop-blur-sm">
          <div 
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Current chapter indicator */}
        <button
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="flex w-full items-center justify-between bg-background/95 px-4 py-3 backdrop-blur-sm"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {chapters.find(c => c.id === currentChapter)?.label}
          </span>
          <svg 
            className={`h-4 w-4 text-muted-foreground transition-transform ${mobileExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Expanded chapter list */}
        {mobileExpanded && (
          <div className="border-t border-border bg-background/95 backdrop-blur-sm">
            <ol className="divide-y divide-border">
              {chapters.map((chapter) => (
                <li key={chapter.id}>
                  <a
                    href={chapter.anchor}
                    onClick={() => setMobileExpanded(false)}
                    className={`
                      flex items-center gap-4 px-4 py-3 transition-colors
                      ${currentChapter === chapter.id 
                        ? 'bg-accent/10 text-accent' 
                        : 'text-foreground/70 hover:bg-surface/30'
                      }
                    `}
                  >
                    <span className="font-mono text-xs">
                      {chapter.number}
                    </span>
                    <span className="flex-1 font-mono text-sm uppercase tracking-wider">
                      {chapter.label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </>
  );
}
