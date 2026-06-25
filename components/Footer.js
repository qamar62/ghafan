import Link from "next/link";
import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-edge/70 plate">
      <div className="absolute inset-x-0 top-0 accent-line" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Ghafan Steel Works logo"
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
            />
            <span className="font-display text-lg font-bold uppercase tracking-wide text-white">
              Ghafan Steel Works
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ash">
            {site.tagline}. Structural fabrication, welding and custom steel
            work in Al Qusais, Dubai.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Navigate
          </h3>
          <ul className="space-y-2 text-sm text-ash">
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/car-repair" className="hover:text-white">Car Repair</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-ash">
            <li className="flex items-start gap-2">
              <Icon name="pin" className="mt-0.5 h-4 w-4 text-accent" />
              <span>{site.address.street}, {site.address.city}</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 text-accent" />
              <a href={`tel:${site.phoneRaw}`} className="hover:text-white">{site.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
            Hours
          </h3>
          <ul className="space-y-1.5 text-sm text-ash">
            <li className="flex justify-between gap-4"><span>Mon – Sat</span><span className="text-cloud">8:00 – 18:00</span></li>
            <li className="flex justify-between gap-4"><span>Sunday</span><span className="text-cloud">Closed</span></li>
          </ul>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 w-full">
            <Icon name="whatsapp" className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-edge/60">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ash sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
