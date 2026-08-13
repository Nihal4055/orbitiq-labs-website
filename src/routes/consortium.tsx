import { createFileRoute } from "@tanstack/react-router";
import { SchoolOfResearchPage } from "@/components/school/SchoolOfResearchPage";

export const Route = createFileRoute("/consortium")({
  head: () => ({
    meta: [
      { title: "OrbitIQ Labs — School of Research" },
      { name: "description", content: "A structured research program teaching the full investigative loop — from question to validated output. Built around Morbius, Prometheus, and Parallax research systems." },
      { property: "og:title", content: "OrbitIQ Labs — School of Research" },
      { property: "og:description", content: "Learn to investigate. Operate in the research loop. Produce work that can be examined." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ConsortiumRoute,
});

function ConsortiumRoute() {
  return <SchoolOfResearchPage />;
}
