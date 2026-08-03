import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PrometheusPage } from "@/components/research/PrometheusPage";

const TITLE = "Prometheus — Agentic Research Assistant";
const DESCRIPTION =
  "A long-horizon reasoning engine that reads scientific literature, extracts causal mechanisms, synthesizes insights across disciplines, and generates research proposals for navigating vast knowledge graphs.";

export const Route = createFileRoute("/research/prometheus")({
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
  component: Prometheus,
});

function Prometheus() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <PrometheusPage />
      <SiteFooter />
    </main>
  );
}
