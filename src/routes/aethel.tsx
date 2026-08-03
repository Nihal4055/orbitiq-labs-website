import { createFileRoute } from "@tanstack/react-router";
import { AethelPage } from "@/components/chaos/AethelPage";

export const Route = createFileRoute("/aethel")({
  head: () => ({
    meta: [
      { title: "Aethel — A Foundation Model Built to Reason Like a Scientist" },
      { name: "description", content: "A foundation model for scientific reasoning across chemistry, materials science, biology, earth sciences, and mathematics. Mixture-of-Experts architecture with native multimodal fluency." },
      { property: "og:title", content: "Aethel — OrbitIQ Labs" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AethelRoute,
});

function AethelRoute() {
  return <AethelPage />;
}
