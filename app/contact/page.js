import { PageHero } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Ghafan Steel Works in Al Qusais, Dubai. Call, WhatsApp or send an enquiry for steel fabrication, welding and custom gates & railings.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        sub="Send your drawings or a quick photo and we'll get you a quote within 24 hours."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <Reveal>
            <h2 className="h-display text-2xl text-white">Talk to the workshop</h2>
            <p className="mt-3 text-ash">
              We&apos;re open Monday to Saturday, 8:00 AM – 6:00 PM. WhatsApp is
              the fastest way to reach us.
            </p>

            <div className="mt-8 space-y-4">
              <a href={`tel:${site.phoneRaw}`} className="card flex items-center gap-4 p-5 transition hover:border-accent/60">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-coal text-accent"><Icon name="phone" className="h-5 w-5" /></span>
                <span><span className="block text-xs uppercase tracking-wider text-ash">Call</span><span className="text-cloud">{site.phoneDisplay}</span></span>
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 p-5 transition hover:border-accent/60">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-coal text-[#25D366]"><Icon name="whatsapp" className="h-5 w-5" /></span>
                <span><span className="block text-xs uppercase tracking-wider text-ash">WhatsApp</span><span className="text-cloud">Chat with us now</span></span>
              </a>
              <a href={`mailto:${site.email}`} className="card flex items-center gap-4 p-5 transition hover:border-accent/60">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-coal text-accent"><Icon name="mail" className="h-5 w-5" /></span>
                <span><span className="block text-xs uppercase tracking-wider text-ash">Email</span><span className="text-cloud">{site.email}</span></span>
              </a>
              <div className="card flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-coal text-accent"><Icon name="pin" className="h-5 w-5" /></span>
                <span><span className="block text-xs uppercase tracking-wider text-ash">Workshop</span><span className="text-cloud">{site.address.street}, {site.address.city}</span></span>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="mt-12 overflow-hidden rounded-xl border border-edge">
          <iframe
            title="Ghafan Steel Works map"
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full grayscale-[40%]"
          />
        </Reveal>
      </section>
    </>
  );
}
