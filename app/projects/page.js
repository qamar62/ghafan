import { PageHero } from "@/components/Section";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Projects & Gallery",
  description:
    "A selection of steel fabrication, welding and custom gate & railing projects completed by Ghafan Steel Works in Dubai.",
  alternates: { canonical: "/projects" },
};

const projects = [
  { title: "Industrial Mezzanine Platform", tag: "Structural", icon: "beam" },
  { title: "Automated Villa Sliding Gate", tag: "Gates", icon: "gate" },
  { title: "Stainless Steel Balustrade", tag: "Railings", icon: "ruler" },
  { title: "Warehouse Portal Frame", tag: "Structural", icon: "beam" },
  { title: "Spiral Staircase Fabrication", tag: "Fabrication", icon: "ruler" },
  { title: "Security Window Grills", tag: "Grills", icon: "gate" },
  { title: "Stainless Handrail — Pipe Weld", tag: "Welding", icon: "spark" },
  { title: "Rooftop Equipment Skid", tag: "Structural", icon: "beam" },
  { title: "Custom Steel Canopy", tag: "Fabrication", icon: "fire" },
];

function Tile({ p, i }) {
  return (
    <Reveal delay={(i % 3) * 80}>
      <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-edge/70 plate">
        <div className="absolute inset-0 bg-steel-grid bg-[size:32px_32px] opacity-30 transition group-hover:opacity-50" />
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-glow blur-2xl opacity-0 transition group-hover:opacity-100" />
        <div className="absolute inset-0 grid place-items-center">
          <Icon name={p.icon} className="h-16 w-16 text-edge transition-colors duration-300 group-hover:text-accent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-400">{p.tag}</span>
          <h3 className="mt-1 font-display text-lg font-semibold uppercase tracking-wide text-white">{p.title}</h3>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Projects"
        sub="From heavy structural builds to fine ornamental steel — a snapshot of the work coming out of our Al Qusais workshop."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Tile key={p.title} p={p} i={i} />
          ))}
        </div>

        <Reveal className="mt-12 rounded-xl border border-dashed border-edge bg-panel/40 p-8 text-center">
          <p className="text-ash">
            Want your project featured here?{" "}
            <span className="text-cloud">Send us photos of your requirement on WhatsApp</span> and
            we&apos;ll get you a quote.
          </p>
        </Reveal>
      </section>

      <CTABand />
    </>
  );
}
