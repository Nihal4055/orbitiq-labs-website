import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AethelPage } from "@/components/chaos/AethelPage";

const TITLE = "Aethel — Foundation Model Built to Reason Like a Scientist";
const DESCRIPTION =
  "A ~1 trillion parameter Mixture-of-Experts architecture with native fluency across molecular structures, biological sequences, crystallographic data, and scientific imaging. Built to operate in iterative research loops.";

export const Route = createFileRoute("/research/aethel")({
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
  component: Aethel,
});

function Aethel() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <AethelPage />
      <SiteFooter />
    </main>
  );
}
