import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ParallaxPage } from "@/components/research/ParallaxPage";

const TITLE = "Parallax — Quantitative Research System";
const DESCRIPTION =
  "A formal reasoning system for quantitative research, combining causal inference, stochastic modeling, and portfolio theory. Designed for analysts who need rigorous, auditable decision frameworks under uncertainty.";

export const Route = createFileRoute("/research/parallax")({
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
  component: Parallax,
});

function Parallax() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <ParallaxPage />
      <SiteFooter />
    </main>
  );
}
