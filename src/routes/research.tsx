import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ResearchPage } from "@/components/research/ResearchPage";

const TITLE = "Research — OrbitIQ Labs";
const DESCRIPTION =
  "We work on some of the most complex challenges in AI: autonomous scientific discovery, agentic reasoning systems, and foundation models trained to operate like scientists.";

export const Route = createFileRoute("/research")({
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
  component: Research,
});

function Research() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <ResearchPage />
      <SiteFooter />
    </main>
  );
}
