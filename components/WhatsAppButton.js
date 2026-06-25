"use client";

import { whatsappLink } from "@/lib/site";
import { Icon } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <span className="hidden rounded-full border border-edge bg-ink/90 px-4 py-2 text-sm font-medium text-cloud shadow-plate backdrop-blur group-hover:block sm:block">
        Chat with us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-4px_rgba(37,211,102,.6)] transition-transform duration-200 hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <Icon name="whatsapp" className="relative h-7 w-7" />
      </span>
    </a>
  );
}
