import { PageHero } from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { getImages } from "@/lib/gallery";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Car Repair & Vehicle Workshop",
  description:
    "Ghafan auto workshop in Al Qusais, Dubai — mechanical repair, vehicle welding, bodywork and maintenance for cars, SUVs, 4x4s and vans across all major brands.",
  alternates: { canonical: "/car-repair" },
};

const autoServices = [
  {
    icon: "wrench",
    title: "Mechanical Repair",
    text: "Engine, suspension, brakes and general mechanical diagnosis and repair for all vehicle types.",
  },
  {
    icon: "spark",
    title: "Vehicle Welding",
    text: "Chassis, frame and panel welding — MIG, TIG and arc — to restore strength and safety.",
  },
  {
    icon: "shield",
    title: "Bodywork & Repair",
    text: "Dent, panel and structural body repairs with a clean, durable finish.",
  },
  {
    icon: "fire",
    title: "Custom Fabrication",
    text: "Bumpers, brackets, racks and custom metal parts fabricated and fitted on-site.",
  },
  {
    icon: "ruler",
    title: "General Maintenance",
    text: "Routine servicing and checks to keep your vehicle running reliably.",
  },
  {
    icon: "clock",
    title: "Quick Assistance",
    text: "Fast turnaround on common repairs — get back on the road sooner.",
  },
];

const carTypes = ["SUV", "Sedan", "4x4", "Coupe", "Convertible", "Hatchback", "Sports Cars", "Vans"];

const brands = [
  "Hyundai", "Nissan", "Mazda", "Isuzu", "Jeep", "Land Rover", "Volkswagen",
  "Suzuki", "Subaru", "Mahindra", "Tata", "Great Wall", "GAC", "DONGFENG",
  "KING LONG", "SSANGYONG", "Peugeot", "Opel", "MINI (BMW)", "Jaguar", "Smart",
];

export default function CarRepairPage() {
  const images = getImages("car-repair");

  return (
    <>
      <PageHero
        eyebrow="Auto workshop · Al Qusais"
        title="Car Repair & Maintenance"
        sub="Alongside our steel work, Ghafan runs a full vehicle workshop — mechanical repair, welding and bodywork for cars, SUVs, 4x4s and vans across all major brands."
      />

      {/* Intro */}
      <section className="container-x py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow"><span className="h-px w-6 bg-accent" /> The workshop</span>
            <h2 className="h-display mt-4 text-3xl text-white">Metal expertise, on your vehicle</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ash">
              <p>
                The same hands that fabricate structural steel also keep vehicles
                on the road. Our Al Qusais workshop handles mechanical repair,
                vehicle welding and bodywork — the kind of solid, metal-first
                work that comes from a fabrication background.
              </p>
              <p>
                Whether it&apos;s a frame weld, a mechanical fault or a custom
                bracket, we diagnose honestly and fix it properly. Drop by the
                workshop or send a photo of the problem on WhatsApp for a quick
                assessment.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsappLink("Hello Ghafan, I need help with my vehicle.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Icon name="whatsapp" className="h-4 w-4" />
                Ask About a Repair
              </a>
              <a href={`tel:${site.phoneRaw}`} className="btn-ghost">
                <Icon name="phone" className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card p-7">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">Workshop info</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-center gap-3 text-cloud"><Icon name="pin" className="h-5 w-5 text-accent" /> {site.address.street}, {site.address.city}</li>
                <li className="flex items-center gap-3 text-cloud"><Icon name="clock" className="h-5 w-5 text-accent" /> Mon–Sat · 8:00 AM – 6:00 PM · Sun closed</li>
                <li className="flex items-center gap-3 text-cloud"><Icon name="wrench" className="h-5 w-5 text-accent" /> Mechanical · Welding · Bodywork</li>
              </ul>
              <div className="mt-6 overflow-hidden rounded-lg border border-edge">
                <iframe
                  title="Ghafan workshop location"
                  src={site.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-48 w-full grayscale-[40%]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="relative border-y border-edge/60 plate py-16 md:py-20">
        <div className="absolute inset-0 bg-steel-grid bg-[size:48px_48px] opacity-20" />
        <div className="container-x relative">
          <Reveal className="text-center">
            <span className="eyebrow justify-center"><span className="h-px w-6 bg-accent" /> What we do</span>
            <h2 className="h-display mt-4 text-3xl text-white">Vehicle services</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {autoServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="card h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-coal text-accent">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles & brands */}
      <section className="container-x py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="h-display text-2xl text-white">Vehicle types we handle</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {carTypes.map((t) => (
                <span key={t} className="flex items-center gap-2 rounded-full border border-edge bg-coal px-4 py-2 text-sm text-cloud">
                  <Icon name="check" className="h-4 w-4 text-accent" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="h-display text-2xl text-white">Brands we service</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {brands.map((b) => (
                <span key={b} className="rounded-md border border-edge bg-panel px-3.5 py-1.5 text-sm text-ash">
                  {b}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-ash">…and more. Not sure if we cover yours? Just ask.</p>
          </Reveal>
        </div>
      </section>

      {/* Vehicle gallery */}
      <section className="container-x pb-16 md:pb-20">
        <Reveal className="mb-8">
          <span className="eyebrow"><span className="h-px w-6 bg-accent" /> In the bay</span>
          <h2 className="h-display mt-4 text-3xl text-white">Workshop photos</h2>
        </Reveal>
        {images.length > 0 ? (
          <Reveal>
            <GalleryGrid images={images} />
          </Reveal>
        ) : (
          <Reveal className="rounded-2xl border border-dashed border-edge bg-panel/50 p-10 text-center">
            <p className="text-ash">
              Vehicle and workshop photos will appear here.{" "}
              <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-white">
                See live photos on our Google profile →
              </a>
            </p>
          </Reveal>
        )}
      </section>

      {/* CTA */}
      <section className="container-x pb-20">
        <Reveal className="relative overflow-hidden rounded-2xl border border-accent/30 bg-accent-sheen p-10 text-ink shadow-glow md:p-14">
          <div className="absolute inset-0 opacity-20 bg-steel-grid bg-[size:32px_32px]" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="h-display text-3xl md:text-4xl">Vehicle trouble? Let&apos;s take a look.</h2>
              <p className="mt-3 max-w-xl text-ink/80">
                Send a photo or describe the issue on WhatsApp and we&apos;ll tell
                you what&apos;s involved — no guesswork.
              </p>
            </div>
            <a
              href={whatsappLink("Hello Ghafan, I need a vehicle repair quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full bg-ink text-white hover:bg-coal"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Message the Workshop
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
