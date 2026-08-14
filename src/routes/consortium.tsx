import { createFileRoute } from "@tanstack/react-router";
import { ConsortiumPage } from "@/components/consortium/ConsortiumPage";

export const Route = createFileRoute("/consortium")({
  head: () => ({
    meta: [
      { title: "Page Not Available" },
      { name: "description", content: "This page is not currently available." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "OrbitIQ Labs" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ConsortiumRoute,
});

function ConsortiumRoute() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Page Not Available
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This page is not currently available.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
