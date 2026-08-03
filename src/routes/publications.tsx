import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { ArrowLeft, ExternalLink } from "lucide-react";

const TITLE = "Publications — OrbitIQ Labs Research";
const DESCRIPTION =
  "Complete list of research publications from OrbitIQ Labs and collaborators, spanning AI, robotics, scientific computing, and autonomous systems.";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Publications,
});

// ── All Publications Data (4 Books + 43 Papers = 47 Total) ────────────────
interface Publication {
  date: string;
  title: string;
  authors: string;
  venue: string;
  link: string;
  type: "book" | "paper";
}

const ALL_PUBLICATIONS: Publication[] = [
  // OrbitIQ Labs Research Papers (3)
  {
    date: "2025",
    title: "A Geometric Analysis of Quantum-Inspired Local Tensor Regression",
    authors: "OrbitIQ Labs Research",
    venue: "Research Square · Preprint",
    link: "https://www.researchsquare.com/article/rs-7917214/v1",
    type: "paper",
  },
  {
    date: "2025",
    title: "AMODO-EO: Adaptive Objective Discovery in Multi-Objective Drug Optimization",
    authors: "OrbitIQ Labs Research",
    venue: "ChemRxiv",
    link: "https://chemrxiv.org/doi/full/10.26434/chemrxiv-2025-rjhxn",
    type: "paper",
  },

  // Books (4)
  {
    date: "2024",
    title: "Stochastic Minds: Math, Models, and the Beautiful Chaos of Getting It Almost Right",
    authors: "OrbitIQ Labs Founder",
    venue: "Amazon Publishing",
    link: "https://www.amazon.com/Stochastic-Minds-Beautiful-Getting-Intelligence/dp/B0GQM2DG96",
    type: "book",
  },
  {
    date: "2024",
    title: "Stochastic Futures: Agents, AGI, and the Mathematics of Control",
    authors: "OrbitIQ Labs Founder",
    venue: "Amazon Publishing",
    link: "https://www.amazon.com/Stochastic-Futures-Mathematics-Control-Intelligence/dp/B0GQGHQTHB",
    type: "book",
  },
  {
    date: "2024",
    title: "The Fixed Point: How Metacognition Generates Thought and Builds the Self",
    authors: "OrbitIQ Labs Founder",
    venue: "Amazon Publishing",
    link: "https://www.amazon.com/dp/B0H2Y3JHWD",
    type: "book",
  },
  {
    date: "2024",
    title: "The Cascade: A Network Science Autopsy of History's Most Enigmatic Collapse",
    authors: "OrbitIQ Labs Founder",
    venue: "Amazon Publishing",
    link: "https://www.amazon.com/Cascade-Network-Historys-Enigmatic-Collapse/dp/B0H2XRBHPD",
    type: "book",
  },

  // Dr. Shamanth Rai's Publications (40)
  {
    date: "2024",
    title: "Transformer-Augmented Deep Reinforcement Learning for Fault-Tolerant Autonomous Navigation in Aerospace Robotics",
    authors: "Rai, S. et al.",
    venue: "INJOERE",
    link: "https://injoere.com/index.php/injoere/article/view/1185",
    type: "paper",
  },
  {
    date: "2024",
    title: "Graph Data Science-Driven Framework to Aid Auditory and Speech Impaired Individuals",
    authors: "Rai, S. et al.",
    venue: "Scientific Reports",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:_kc_bZDykSQC",
    type: "paper",
  },
  {
    date: "2024",
    title: "Intelligent Framework for Early Prediction of Type-II Diabetes using Palm Print Analysis",
    authors: "Rai, S. et al.",
    venue: "Medical Imaging Journal",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:3fE2CSJIrl8C",
    type: "paper",
  },
  {
    date: "2024",
    title: "Detection and Localization of Lung Nodules using Graph Data Science",
    authors: "Rai, S. et al.",
    venue: "Medical Imaging Conference",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:KlAtU1dfN6UC",
    type: "paper",
  },
  {
    date: "2024",
    title: "Data-Driven Beauty: Unleashing the Power of Deep Learning in Skincare",
    authors: "Rai, S. et al.",
    venue: "AI in Healthcare Conference",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:4TOpqqG69KYC",
    type: "paper",
  },
  {
    date: "2024",
    title: "Road Safety Analysis Framework Using Deep Learning Techniques",
    authors: "Rai, S. et al.",
    venue: "Transportation Research",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:MXK_kJrjxJIC",
    type: "paper",
  },
  {
    date: "2023",
    title: "Sentiment Analysis Using Machine Learning Classifiers: Evaluation of Performance",
    authors: "Rai, S. et al.",
    venue: "IEEE Conference",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:W7OEmFMy1HYC",
    type: "paper",
  },
  {
    date: "2023",
    title: "Blockchain Enabled Decentralized Application for Securing Electronic Medical Records",
    authors: "Rai, S. et al.",
    venue: "Blockchain in Healthcare",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:YOwf2qJgpHMC",
    type: "paper",
  },
  {
    date: "2023",
    title: "Energy-Efficient Wireless Sensor Networks using Learning Techniques",
    authors: "Rai, S. et al.",
    venue: "IoT Systems Journal",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:u-x6o8ySG0sC",
    type: "paper",
  },
  {
    date: "2023",
    title: "AI Enhanced IELTS Preparation using Custom Neural Networks",
    authors: "Rai, S. et al.",
    venue: "Educational Technology",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:9ZlFYXVOiuMC",
    type: "paper",
  },
  {
    date: "2022",
    title: "A Novel Computational Geometry-Based Node Deployment Scheme in 3D WSN",
    authors: "Rai, S. et al.",
    venue: "Wireless Networks Journal",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:Tyk-4Ss8FVUC",
    type: "paper",
  },
  {
    date: "2022",
    title: "An Algorithmic Approach to WSN Localization Using Rigid Graphs",
    authors: "Rai, S. et al.",
    venue: "Network Optimization",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:qjMakFHDy7sC",
    type: "paper",
  },
  {
    date: "2022",
    title: "Localization in Wireless Sensor Networks Using Rigid Graphs: A Review",
    authors: "Rai, S. et al.",
    venue: "Computer Networks",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:UeHWp8X0CEIC",
    type: "paper",
  },
  {
    date: "2022",
    title: "A Formal Analysis of Anthropometric Parameters for Forecasting Dyslipidemia",
    authors: "Rai, S. et al.",
    venue: "Medical Research Journal",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:ufrVoPGSRksC",
    type: "paper",
  },
  {
    date: "2022",
    title: "Visionary Code: An AI-Driven Platform for Blind and Visually Impaired Programmers",
    authors: "Rai, S. et al.",
    venue: "Accessibility Technologies",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:Wp0gIr-vW9MC",
    type: "paper",
  },
  {
    date: "2021",
    title: "Text Refinement Powered by Artificial Intelligence for Tourism",
    authors: "Rai, S. et al.",
    venue: "Tourism Technology Journal",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:eQOLeE2rZwMC",
    type: "paper",
  },
  {
    date: "2021",
    title: "Impact of Syntactical and Statistical Pattern Recognition on Prognostic Reasoning",
    authors: "Rai, S. et al.",
    venue: "Pattern Recognition",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:WF5omc3nYNoC",
    type: "paper",
  },
  {
    date: "2021",
    title: "Statistical Data Modeling for Knowledge Discovery of Arecanut Crop",
    authors: "Rai, S. et al.",
    venue: "Agricultural AI Journal",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:8k81kl-MbHgC",
    type: "paper",
  },
  {
    date: "2021",
    title: "EchoSpeech: Enhancing Speech for Children with Autism using Deep Learning",
    authors: "Rai, S. et al.",
    venue: "Speech Technology",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:QIV2ME_5wuYC",
    type: "paper",
  },
  {
    date: "2021",
    title: "Early Knowledge-Driven Prognostic Reasoning Model using Data Analytics",
    authors: "Rai, S. et al.",
    venue: "Data Analytics Conference",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:0EnyYjriUFMC",
    type: "paper",
  },
  {
    date: "2021",
    title: "Prognostic Reasoning Model for Improving Arecanut Crop Productivity",
    authors: "Rai, S. et al.",
    venue: "Agricultural Computing",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:Se3iqnhoufwC",
    type: "paper",
  },
  {
    date: "2021",
    title: "Scrutinizing Localized Topology Control in WSN using Rigid Graphs",
    authors: "Rai, S. et al.",
    venue: "WSN Conference",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:9yKSN-GCB0IC",
    type: "paper",
  },
  {
    date: "2021",
    title: "Quality of Information Analysis in WSN: An Application in BASN",
    authors: "Rai, S. et al.",
    venue: "Body Area Networks",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:YsMSGLbcyi4C",
    type: "paper",
  },
  {
    date: "2021",
    title: "The Potential Role of Vitamin B12 in COVID-19 Prevention: A Narrative Review",
    authors: "Rai, S. et al.",
    venue: "Medical Journal",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:roLk4NBRz8UC",
    type: "paper",
  },
  {
    date: "2021",
    title: "Covid Vaccine Dilemma Curbing Herd Immunity in India",
    authors: "Rai, S. et al.",
    venue: "Public Health Journal",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:_FxGoFyzp5QC",
    type: "paper",
  },
  {
    date: "2021",
    title: "Heterologous Prime-Boost Approach for COVID-19 Vaccine",
    authors: "Rai, S. et al.",
    venue: "Vaccine Research",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:LkGwnXOMwfcC",
    type: "paper",
  },
  {
    date: "2021",
    title: "System Modeling for Prognostic Reasoning of Arecanut Crop",
    authors: "Rai, S. et al.",
    venue: "Systems Modeling",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:ULOm3_A8WrAC",
    type: "paper",
  },
  {
    date: "2021",
    title: "Statistical Feature Selection for Areca Nut Crop Analysis",
    authors: "Rai, S. et al.",
    venue: "Feature Engineering",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:5nxA0vEk-isC",
    type: "paper",
  },
  {
    date: "2021",
    title: "Visualized Document Similarity Framework with Knowledge Graph",
    authors: "Rai, S. et al.",
    venue: "Knowledge Graphs",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:UebtZRa9Y70C",
    type: "paper",
  },
  {
    date: "2021",
    title: "Graph Rigidity Application for Localization in WSN",
    authors: "Rai, S. et al.",
    venue: "Graph Theory Conference",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:u5HHmVD_uO8C",
    type: "paper",
  },
  {
    date: "2021",
    title: "Investilyze: Personalized Investment Advisor for Diverse Asset Classes",
    authors: "Rai, S. et al.",
    venue: "FinTech Conference",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:dhFuZR0502QC",
    type: "paper",
  },
  {
    date: "2020",
    title: "Smart Wearable Device for Enhanced Mobility of Visually Impaired",
    authors: "Rai, S. et al.",
    venue: "Wearable Technology",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:mVmsd5A6BfQC",
    type: "paper",
  },
  {
    date: "2020",
    title: "Road Surface Analysis Through Prognostic Model Using Deep Learning",
    authors: "Rai, S. et al.",
    venue: "Computer Vision",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:M3ejUd6NZC8C",
    type: "paper",
  },
  {
    date: "2020",
    title: "Intelligent Framework for Smart Health Application using Image Analysis",
    authors: "Rai, S. et al.",
    venue: "Smart Health Conference",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:aqlVkmm33-oC",
    type: "paper",
  },
  {
    date: "2020",
    title: "Intelligent Framework for Auditory Impaired Using Graph Data Science",
    authors: "Rai, S. et al.",
    venue: "Accessibility Computing",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:kNdYIx-mwKoC",
    type: "paper",
  },
  {
    date: "2019",
    title: "A 3-D Radio Irregularity Model (3DRIM) for Wireless Sensor Network",
    authors: "Rai, S. et al.",
    venue: "Wireless Networks",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:IjCSPb-OGe4C",
    type: "paper",
  },
  {
    date: "2018",
    title: "Intelligent Framework for Smart Health using Image Analysis",
    authors: "Rai, S. et al.",
    venue: "Healthcare Technology",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:L8Ckcad2t8MC",
    type: "paper",
  },
  {
    date: "2018",
    title: "Intelligent Framework for Auditory Impaired by Accelerating Sign Analysis",
    authors: "Rai, S. et al.",
    venue: "Accessibility Research",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:Zph67rFs4hoC",
    type: "paper",
  },
  {
    date: "2018",
    title: "Anthropometric Parameters for Forecasting Dyslipidemia in Young Adults",
    authors: "Rai, S. et al.",
    venue: "Medical Analytics",
    link: "https://scholar.google.com/citations?user=DRmYWIYAAAAJ&citation_for_view=DRmYWIYAAAAJ:hqOjcs7Dif8UC",
    type: "paper",
  },
];

function Publications() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="border-b border-border pb-20 pt-32 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <Reveal>
            <Link
              to="/research"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-violet-400 transition-all hover:gap-3"
            >
              <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" />
              Back to Research
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display mt-8 text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.95] tracking-[-0.03em]">
              Publications
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {ALL_PUBLICATIONS.length} publications from OrbitIQ Labs and collaborators, spanning
              autonomous systems, AI for science, robotics, and computational methods. Listed in
              reverse chronological order.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="space-y-1">
            {ALL_PUBLICATIONS.map((pub, i) => (
              <Reveal key={i} delay={Math.min(i * 15, 400)}>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-2 border-b border-border/30 py-6 transition-all hover:border-border hover:bg-surface/20 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  {/* Date */}
                  <span className="label-mono w-16 shrink-0 text-violet-400">{pub.date}</span>

                  {/* Title & Venue */}
                  <div className="flex-1">
                    <h3 className="font-display text-base font-light leading-snug tracking-tight transition-colors group-hover:text-accent">
                      {pub.title}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span>{pub.authors}</span>
                      <span>·</span>
                      <span>{pub.venue}</span>
                      {pub.type === "book" && (
                        <>
                          <span>·</span>
                          <span className="rounded border border-violet-400/30 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-violet-400">
                            Book
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Link Icon */}
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-violet-400" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
