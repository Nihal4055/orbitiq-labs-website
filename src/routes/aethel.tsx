import { createFileRoute } from "@tanstack/react-router";
import { AethelPage } from "@/components/chaos/AethelPage";

export const Route = createFileRoute("/aethel")({
  head: () => ({
    meta: [
      { title: "Project Aethel — Foundation Model Under Development" },
      { name: "description", content: "Architecture and research plan for a scientific reasoning foundation model. Mixture-of-Experts design across chemistry, materials science, biology, earth sciences, and mathematics. Currently in development." },
      { property: "og:title", content: "Project Aethel — OrbitIQ Labs" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AethelRoute,
});

function AethelRoute() {
  return <AethelPage />;
}
