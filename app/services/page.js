import { PageHero } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { services } from "@/lib/site";

export const metadata = {
  title: "Steel Fabrication & Welding Services",
  description:
    "Structural steel fabrication, MIG/TIG/Arc welding, custom gates, railings & grills, and mechanical repair in Al Qusais, Dubai.",
  alternates: { canonical: "/services" },
};

const materials = ["Mild Steel", "Stainless Steel", "Aluminium", "Galvanised", "MS Pipe & Box", "Sheet Metal"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our capabilities"
        title="Services"
        sub="One workshop for structural fabrication, welding and custom architectural steel — built to spec, finished to last."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section className="relative border-y border-edge/60 plate py-16">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="eyebrow justify-center"><span className="h-px w-6 bg-accent" /> Materials we work</span>
            <h2 className="h-display mt-4 text-3xl text-white">Any metal, expertly handled</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {materials.map((m, i) => (
              <Reveal key={m} delay={i * 50}>
                <span className="flex items-center gap-2 rounded-full border border-edge bg-coal px-5 py-2.5 text-sm text-cloud">
                  <Icon name="check" className="h-4 w-4 text-accent" />
                  {m}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
