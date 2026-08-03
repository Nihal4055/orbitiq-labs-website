import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MorbiusPage } from "@/components/research/MorbiusPage";

const TITLE = "Morbius — Autonomous Scientific Discovery";
const DESCRIPTION =
  "An agentic AI system that formulates hypotheses, designs experiments, interprets results, and generates novel chemical insights autonomously across molecular dynamics, materials discovery, and drug design.";

export const Route = createFileRoute("/research/morbius")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Morbius,
});

function Morbius() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <MorbiusPage />
      <SiteFooter />
    </main>
  );
}
