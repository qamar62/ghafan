import { site, whatsappLink } from "@/lib/site";
import { Icon } from "./Icons";
import Reveal from "./Reveal";

export default function CTABand() {
  return (
    <section className="container-x py-20">
      <Reveal className="relative overflow-hidden rounded-2xl border border-accent/30 bg-accent-sheen p-10 text-ink shadow-glow md:p-14">
        <div className="absolute inset-0 opacity-20 bg-steel-grid bg-[size:32px_32px]" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="h-display text-3xl md:text-4xl">
              Got steel to fabricate? Let&apos;s build it right.
            </h2>
            <p className="mt-3 max-w-xl text-ink/80">
              Send us your drawings or a quick photo on WhatsApp and get a
              clear, no-obligation quote within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full bg-ink text-white hover:bg-coal"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              WhatsApp a Quote
            </a>
            <a
              href={`tel:${site.phoneRaw}`}
              className="btn w-full border border-ink/30 bg-transparent text-ink hover:bg-ink/10"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
