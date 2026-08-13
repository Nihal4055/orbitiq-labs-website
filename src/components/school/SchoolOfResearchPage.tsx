/**
 * School of Research — Main Page Component
 * 
 * Assembles all 9 chapters in fixed order with shared chrome (nav, footer, progress rail).
 * Static scaffold — animation layer added in Chapter 4 build phase.
 */

import { useState } from "react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ResidencyApplicationForm } from "@/components/consortium/ResidencyApplicationForm";
import { ChapterProgressRail } from "./ChapterProgressRail";
import { ChapterSignal } from "./ChapterSignal";
import { ChapterProblem } from "./ChapterProblem";
import { ChapterInvitation } from "./ChapterInvitation";
import { ChapterLoop } from "./ChapterLoop";
import { ChapterCohort } from "./ChapterCohort";
import { ChapterDossier } from "./ChapterDossier";
import { ChapterFrontiers } from "./ChapterFrontiers";
import { ChapterReviewNetwork } from "./ChapterReviewNetwork";
import { ChapterCommitment } from "./ChapterCommitment";

export function SchoolOfResearchPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Persistent navigation */}
      <SiteNav />

      {/* Chapter progress rail */}
      <ChapterProgressRail />

      {/* Main scroll container — all 9 chapters in order */}
      <main>
        <ChapterSignal />
        <ChapterProblem />
        <ChapterInvitation />
        <ChapterLoop />
        <ChapterCohort />
        <ChapterDossier />
        <ChapterFrontiers />
        <ChapterReviewNetwork />
        <ChapterCommitment onOpenApplication={() => setShowApplicationForm(true)} />
      </main>

      {/* Persistent footer */}
      <SiteFooter />

      {/* Application modal (Q4 default: modal with existing form) */}
      <ResidencyApplicationForm 
        isOpen={showApplicationForm}
        onClose={() => setShowApplicationForm(false)}
      />
    </div>
  );
}
