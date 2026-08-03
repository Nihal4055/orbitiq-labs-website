import { createFileRoute } from "@tanstack/react-router";
import { ConsortiumPage } from "@/components/consortium/ConsortiumPage";

export const Route = createFileRoute("/consortium")({
  head: () => ({
    meta: [
      { title: "The OrbitIQ Residency — A Paid Research Program" },
      { name: "description", content: "A 12-week paid research residency built around three production AI research systems — Morbius, Prometheus, and Parallax — and real mentorship. Not a course." },
      { property: "og:title", content: "The OrbitIQ Residency" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ConsortiumRoute,
});

function ConsortiumRoute() {
  return <ConsortiumPage />;
}
