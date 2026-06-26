"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site, whatsappLink } from "@/lib/site";
import { Icon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/car-repair", label: "Car Repair" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-edge/70 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Ghafan Steel Works logo"
            width={44}
            height={44}
            priority
            className="h-10 w-10 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,.5)]"
          />
          <span className="leading-none">
            <span className="block font-display text-lg font-bold uppercase tracking-wide text-white">
              Ghafan
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-400">
              Steel Works
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  pathname === l.href ? "text-accent-400" : "text-ash"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phoneRaw}`} className="btn-ghost">
            <Icon name="phone" className="h-4 w-4" />
            Call
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get a Quote
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-[70] grid h-11 w-11 place-items-center rounded-md border border-edge bg-ink/40 text-cloud backdrop-blur lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="relative block h-3.5 w-5">
            <span className="absolute left-0 top-0 h-0.5 w-5 bg-current" />
            <span className="absolute left-0 top-1.5 h-0.5 w-5 bg-current" />
            <span className="absolute left-0 top-3 h-0.5 w-3.5 bg-current" />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 diamond-plate opacity-60" />
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent-glow blur-[120px]" />
        <div className="absolute inset-0 bg-steel-grid bg-[size:56px_56px] opacity-20" />

        <div className="relative flex h-[100dvh] flex-col">
          <div className="container-x flex h-16 items-center justify-between md:h-20">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Ghafan Steel Works logo"
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-base font-bold uppercase tracking-wide text-white">
                Ghafan<span className="text-accent-400"> Steel</span>
              </span>
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-lg border border-edge bg-panel/60 text-cloud transition hover:border-accent hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center overflow-y-auto">
            <ul className="flex flex-col">
              {links.map((l, i) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href} className="border-t border-edge/50 last:border-b">
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between px-6 py-[3vh] transition-all duration-500 sm:px-10 ${
                        open ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
                      }`}
                      style={{ transitionDelay: open ? `${i * 55 + 120}ms` : "0ms" }}
                    >
                      <span
                        className={`font-display text-[8vw] font-bold uppercase leading-none tracking-tight transition-colors sm:text-4xl ${
                          active ? "text-accent" : "text-white group-hover:text-accent-400"
                        }`}
                      >
                        {l.label}
                      </span>
                      <span className="font-display text-sm tracking-[0.3em] text-ash/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className={`container-x border-t border-edge/50 py-5 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "500ms" : "0ms" }}
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-ash">Get in touch</p>
            <div className="flex gap-3">
              <a href={`tel:${site.phoneRaw}`} onClick={() => setOpen(false)} className="btn-ghost flex-1">
                <Icon name="phone" className="h-4 w-4" />
                Call
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary flex-1"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
