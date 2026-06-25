import { site, whatsappLink, stats } from "@/lib/site";
import { Icon } from "./Icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* Background layers */}
      <div className="absolute inset-0 diamond-plate" />
      <div className="absolute inset-0 bg-steel-grid bg-[size:56px_56px] opacity-30" />
      <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-glow blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="container-x relative pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" />
                Al Qusais · Dubai · UAE
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="h-display mt-5 text-5xl text-white sm:text-6xl md:text-7xl">
                Forged in steel.
                <br />
                <span className="bg-accent-sheen bg-clip-text text-transparent">
                  Built to last.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ash">
                {site.name} delivers precision structural steel fabrication,
                certified welding and custom gates &amp; railings across Dubai —
                engineered strong, finished clean, delivered on time.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Icon name="whatsapp" className="h-4 w-4" />
                  Get a Free Quote
                </a>
                <a href="/services" className="btn-ghost">
                  Explore Services
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ash">
                <span className="flex items-center gap-2"><Icon name="shield" className="h-4 w-4 text-accent" /> Certified welds</span>
                <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4 text-accent" /> On-time delivery</span>
                <span className="flex items-center gap-2"><Icon name="fire" className="h-4 w-4 text-accent" /> MIG · TIG · Arc</span>
              </div>
            </Reveal>
          </div>

          {/* Visual plate / spark panel */}
          <Reveal delay={200} className="relative">
            <div className="card plate relative aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
              {/* Stylised beam graphic */}
              <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="steelG" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#3a404a" />
                    <stop offset="1" stopColor="#15171c" />
                  </linearGradient>
                </defs>
                <g stroke="#4a515c" strokeWidth="1.5" fill="url(#steelG)">
                  <rect x="60" y="40" width="280" height="36" />
                  <rect x="60" y="424" width="280" height="36" />
                  <rect x="182" y="40" width="36" height="420" />
                  <path d="M78 92 L182 92 L182 110 L96 110 Z" opacity=".8" />
                  <path d="M218 408 L322 408 L304 390 L218 390 Z" opacity=".8" />
                </g>
                <g stroke="#e9edf2" strokeWidth="2" fill="none" opacity=".9">
                  <path d="M120 250 l24 -40 l-10 32 l30 0 l-44 60 l12 -40 z" className="animate-spark" />
                </g>
                {[...Array(8)].map((_, i) => (
                  <circle
                    key={i}
                    cx={150 + (i % 4) * 30}
                    cy={300 + Math.floor(i / 4) * 30}
                    r="2.5"
                    fill="#c2c8d2"
                    className="animate-spark"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </svg>
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-edge bg-ink/70 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-accent-400">Workshop</p>
                <p className="mt-1 text-sm text-cloud">Halab St, Al Qusais Industrial 1 — open Mon–Sat</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats strip */}
        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-edge bg-edge md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-panel px-6 py-7 text-center">
                <div className="font-display text-3xl font-bold text-white md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-ash">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
