import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { WhatWeDo, Problem } from "@/components/site/Statements";
import { FeatureCards } from "@/components/site/FeatureCards";
import { ProductShowcase } from "@/components/site/ProductShowcase";
import { AethelShowcase } from "@/components/site/AethelShowcase";
import { TrustStrip } from "@/components/site/TrustStrip";
import { DataFoundation } from "@/components/site/DataFoundation";
import { ResearchShowcase } from "@/components/site/ResearchShowcase";
import { Solutions, WhoWeServe } from "@/components/site/Solutions";
import { ClassicalInterlude } from "@/components/site/ClassicalInterlude";
import { Security } from "@/components/site/Security";
import { About, FounderNote } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "OrbitIQ Labs — Intelligence in Orbit Around Discovery";
const DESCRIPTION =
  "OrbitIQ Labs builds frontier AI systems for autonomous scientific discovery, agentic research, and quantitative reasoning — Morbius, Prometheus and Parallax.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <WhatWeDo />
      <Problem />
      <FeatureCards />
      <ProductShowcase />
      <AethelShowcase />
      <TrustStrip />
      <DataFoundation />

      {/* cinematic break — leads into the published research */}
      <ClassicalInterlude
        image="interlude-athenaeum.jpg"
        imageAlt="Classical scholars in a candlelit athenaeum"
        aphorism={
          <>
            &ldquo;We do not shorten the path to discovery.
            <br />
            We remove everything that was never the path.&rdquo;
          </>
        }
        attribution="OrbitIQ Labs · The Doctrine"
      />

      <ResearchShowcase />
      <Solutions />
      <WhoWeServe />

      {/* cinematic break — leads into trust & security */}
      <ClassicalInterlude
        image="interlude-aegis.jpg"
        imageAlt="The Aegis of Athena — classical painting"
        aphorism={<>&ldquo;Rigor is the only shield that scales.&rdquo;</>}
        attribution="On trust at the frontier"
      />

      <Security />
      <About />
      <FounderNote />
      <Testimonials />

      {/* cinematic break — leads into the closing call */}
      <ClassicalInterlude
        image="interlude-prometheus.jpg"
        imageAlt="Prometheus carrying fire — classical painting"
        aphorism={
          <>
            &ldquo;Every discovery begins as a single spark,
            <br />
            held against the dark.&rdquo;
          </>
        }
        attribution="Πῦρ · The first instrument"
      />

      <FAQ />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
