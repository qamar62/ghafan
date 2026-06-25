import Link from "next/link";
import Hero from "@/components/Hero";
import { SectionHeading } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { services, site } from "@/lib/site";

const process = [
  { icon: "ruler", title: "Measure & Quote", text: "Share drawings or site dimensions — we return a clear quote within 24 hours." },
  { icon: "fire", title: "Cut & Fabricate", text: "Precision cutting, fitting and certified welding in our Al Qusais workshop." },
  { icon: "shield", title: "Finish & Protect", text: "Grinding, powder-coating and rust protection for a clean, durable result." },
  { icon: "check", title: "Deliver & Install", text: "On-time delivery and professional on-site installation across Dubai." },
];

const reasons = [
  { icon: "shield", title: "Certified Welds", text: "Every joint built to standard by experienced welders across mild steel, stainless and aluminium." },
  { icon: "clock", title: "On-Time, Every Time", text: "We respect deadlines. Clear timelines and fast 24-hour quote turnaround." },
  { icon: "ruler", title: "Built to Spec", text: "Work from your drawings or ours — accurate fabrication down to the millimetre." },
  { icon: "fire", title: "Heavy & Light Work", text: "From structural beams to delicate ornamental railings, one workshop handles it all." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services */}
      <section className="container-x py-20 md:py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Steel work, end to end"
          sub="A full-service metal workshop in Al Qusais — fabrication, welding and custom architectural steel under one roof."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-8 text-center">
            <Link href="/services" className="btn-ghost">
              View all services
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Why us */}
      <section className="relative border-y border-edge/60 plate py-20 md:py-24">
        <div className="absolute inset-0 bg-steel-grid bg-[size:48px_48px] opacity-20" />
        <div className="container-x relative">
          <SectionHeading
            center
            eyebrow="Why Ghafan"
            title="The right partner for steel"
            sub="Two decades of hands-on fabrication experience, backed by a workshop built for precision and speed."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="card h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-coal text-accent">
                    <Icon name={r.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-white">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-20 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="From drawing to delivery"
          sub="A simple, transparent process that keeps your project moving."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="relative h-full rounded-xl border border-edge/70 bg-panel/60 p-6">
                <div className="font-display text-5xl font-bold text-white/[0.06]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="-mt-6 grid h-12 w-12 place-items-center rounded-lg bg-accent-sheen text-ink">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Location teaser */}
      <section className="container-x pb-4">
        <Reveal className="card grid items-stretch gap-0 overflow-hidden md:grid-cols-2">
          <div className="p-8 md:p-10">
            <span className="eyebrow"><span className="h-px w-6 bg-accent" /> Visit the workshop</span>
            <h2 className="h-display mt-4 text-3xl text-white">Find us in Al Qusais</h2>
            <p className="mt-3 text-ash">
              {site.address.street}, {site.address.city}. {site.address.landmark}.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3 text-cloud"><Icon name="pin" className="h-5 w-5 text-accent" /> {site.address.street}</li>
              <li className="flex items-center gap-3 text-cloud"><Icon name="clock" className="h-5 w-5 text-accent" /> Mon–Sat · 8:00 AM – 6:00 PM</li>
              <li className="flex items-center gap-3 text-cloud"><Icon name="phone" className="h-5 w-5 text-accent" /> {site.phoneDisplay}</li>
            </ul>
            <Link href="/contact" className="btn-primary mt-7">
              Get directions
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="min-h-[300px]">
            <iframe
              title="Ghafan Steel Works location"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[40%]"
            />
          </div>
        </Reveal>
      </section>

      <CTABand />
    </>
  );
}
