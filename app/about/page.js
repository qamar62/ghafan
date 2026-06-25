import { PageHero } from "@/components/Section";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { site, stats } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Ghafan Steel Works is a Dubai-based steel fabrication and welding workshop in Al Qusais, delivering structural steel, gates, railings and mechanical repair.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: "shield", title: "Quality first", text: "We don't cut corners on welds or finishes. If it leaves our workshop, it's built to last." },
  { icon: "clock", title: "Reliable timelines", text: "We commit to dates and keep them, so your project never stalls waiting on metalwork." },
  { icon: "fire", title: "Skilled craft", text: "Experienced welders and fabricators who take pride in clean, accurate work." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="About Ghafan Steel Works"
        sub="A Dubai steel workshop built on clean welds, honest timelines and work that holds up."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow"><span className="h-px w-6 bg-accent" /> Our story</span>
            <h2 className="h-display mt-4 text-3xl text-white">Steel done properly</h2>
            <div className="mt-5 space-y-4 text-ash leading-relaxed">
              <p>
                {site.name} — operating as {site.legalName} — is a steel
                fabrication, welding and mechanical workshop based on Halab
                Street in Al Qusais Industrial 1, Dubai.
              </p>
              <p>
                We handle the full range of metalwork: structural steel for
                builders and contractors, custom gates, railings and grills for
                villas and buildings, and on-site repairs when something needs
                fixing fast. Whether you bring detailed drawings or just a rough
                idea, our team turns it into solid, finished steel.
              </p>
              <p>
                Our focus is simple — accurate fabrication, certified welds and
                delivery you can plan around. That&apos;s what keeps contractors,
                homeowners and businesses across Dubai coming back.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card plate p-8">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-edge bg-edge">
                {stats.map((s) => (
                  <div key={s.label} className="bg-panel px-6 py-7 text-center">
                    <div className="font-display text-3xl font-bold text-white">{s.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-ash">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-center gap-3 text-cloud"><Icon name="pin" className="h-5 w-5 text-accent" /> {site.address.street}, {site.address.city}</p>
                <p className="flex items-center gap-3 text-cloud"><Icon name="clock" className="h-5 w-5 text-accent" /> Mon–Sat · 8:00 AM – 6:00 PM</p>
                <p className="flex items-center gap-3 text-cloud"><Icon name="phone" className="h-5 w-5 text-accent" /> {site.phoneDisplay}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-y border-edge/60 plate py-16">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="card h-full p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent-sheen text-ink">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
