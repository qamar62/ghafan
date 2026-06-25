"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import { Icon } from "./Icons";

const serviceOptions = [
  "Structural Steel Fabrication",
  "Welding (MIG / TIG / Arc)",
  "Gates, Railings & Grills",
  "Mechanical / On-Site Repair",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: serviceOptions[0], message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = `New enquiry — Ghafan Steel Works%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0A%0A${form.message}`;
    window.open(whatsappLink(decodeURIComponent(msg)), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-md border border-edge bg-coal px-4 py-3 text-sm text-cloud placeholder:text-ash/70 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

  return (
    <form onSubmit={onSubmit} className="card p-7 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ash">Name</label>
          <input required value={form.name} onChange={update("name")} placeholder="Your name" className={field} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ash">Phone</label>
          <input required value={form.phone} onChange={update("phone")} placeholder="+971 5X XXX XXXX" className={field} />
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ash">Service needed</label>
        <select value={form.service} onChange={update("service")} className={field}>
          {serviceOptions.map((o) => (
            <option key={o} value={o} className="bg-coal">{o}</option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ash">Details</label>
        <textarea
          value={form.message}
          onChange={update("message")}
          rows={4}
          placeholder="Tell us about your project, dimensions, quantity…"
          className={field}
        />
      </div>
      <button type="submit" className="btn-primary mt-5 w-full">
        <Icon name="whatsapp" className="h-4 w-4" />
        Send via WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-ash">
        Opens WhatsApp with your details pre-filled — no account needed beyond the app.
      </p>
    </form>
  );
}
