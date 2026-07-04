"use client";

import { useEffect, useState } from "react";
import {
  CURRENCY,
  calcTotals,
  emptyItem,
  fmt,
} from "@/lib/billing";
import { LetterheadHeader, LetterheadFooter } from "./Letterhead";

const inputCls =
  "w-full rounded-md border border-edge bg-coal px-3 py-2 text-sm text-cloud outline-none focus:border-accent placeholder:text-ash/60";
const labelCls =
  "mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ash";

// ─────────────────────────────────────────────────────────────
//  Printable A4 document (light theme, matches letterhead)
// ─────────────────────────────────────────────────────────────
export function DocPaper({ doc }) {
  const t = calcTotals(doc);
  const title = doc.type === "invoice" ? "INVOICE" : "QUOTATION";

  return (
    <div className="print-doc mx-auto flex min-h-[1123px] w-full max-w-[794px] flex-col bg-white text-[#12233f] shadow-plate">
      {/* Letterhead */}
      <LetterheadHeader />

      {/* Title + meta */}
      <div className="flex flex-wrap items-start justify-between gap-4 px-8 pt-6">
        <div>
          <h2 className="text-2xl font-extrabold tracking-[0.2em] text-[#12335e]">
            {title}
          </h2>
          <div className="mt-3 text-sm">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#4a5d78]">
              {doc.type === "invoice" ? "Bill To" : "Quotation For"}
            </p>
            <p className="mt-1 font-bold">{doc.client?.name || "—"}</p>
            {doc.client?.company && <p>{doc.client.company}</p>}
            {doc.client?.phone && <p>{doc.client.phone}</p>}
            {doc.client?.address && (
              <p className="whitespace-pre-line">{doc.client.address}</p>
            )}
          </div>
        </div>
        <table className="text-sm">
          <tbody>
            <tr>
              <td className="pr-4 py-0.5 font-bold text-[#4a5d78]">No.</td>
              <td className="py-0.5 font-semibold">{doc.number || "—"}</td>
            </tr>
            <tr>
              <td className="pr-4 py-0.5 font-bold text-[#4a5d78]">Date</td>
              <td className="py-0.5">{doc.date || "—"}</td>
            </tr>
            {doc.type === "quotation" && doc.validUntil && (
              <tr>
                <td className="pr-4 py-0.5 font-bold text-[#4a5d78]">
                  Valid Until
                </td>
                <td className="py-0.5">{doc.validUntil}</td>
              </tr>
            )}
            {doc.type === "invoice" && (
              <tr>
                <td className="pr-4 py-0.5 font-bold text-[#4a5d78]">Status</td>
                <td
                  className={`py-0.5 font-bold uppercase ${
                    doc.status === "paid" ? "text-emerald-700" : "text-red-700"
                  }`}
                >
                  {doc.status === "paid" ? "Paid" : "Not Paid"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Items */}
      <div className="px-8 pt-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#12335e] text-left text-white">
              <th className="w-10 px-3 py-2 text-center font-semibold">#</th>
              <th className="px-3 py-2 font-semibold">Description</th>
              <th className="w-16 px-3 py-2 text-center font-semibold">Qty</th>
              <th className="w-16 px-3 py-2 text-center font-semibold">Unit</th>
              <th className="w-28 px-3 py-2 text-right font-semibold">
                Rate ({CURRENCY})
              </th>
              <th className="w-32 px-3 py-2 text-right font-semibold">
                Amount ({CURRENCY})
              </th>
            </tr>
          </thead>
          <tbody>
            {(doc.items || []).map((it, i) => (
              <tr key={it.id} className="border-b border-[#d8e0ea]">
                <td className="px-3 py-2 text-center text-[#4a5d78]">
                  {i + 1}
                </td>
                <td className="px-3 py-2 whitespace-pre-line">
                  {it.description || "—"}
                </td>
                <td className="px-3 py-2 text-center">{it.qty}</td>
                <td className="px-3 py-2 text-center">{it.unit}</td>
                <td className="px-3 py-2 text-right">{fmt(it.rate)}</td>
                <td className="px-3 py-2 text-right font-semibold">
                  {fmt((Number(it.qty) || 0) * (Number(it.rate) || 0))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="mt-4 flex justify-end">
          <table className="w-64 text-sm">
            <tbody>
              <tr>
                <td className="py-1 text-[#4a5d78]">Subtotal</td>
                <td className="py-1 text-right font-semibold">
                  {CURRENCY} {fmt(t.subtotal)}
                </td>
              </tr>
              {t.discount > 0 && (
                <tr>
                  <td className="py-1 text-[#4a5d78]">Discount</td>
                  <td className="py-1 text-right font-semibold">
                    − {CURRENCY} {fmt(t.discount)}
                  </td>
                </tr>
              )}
              <tr className="border-t-2 border-[#12335e]">
                <td className="py-2 text-base font-extrabold text-[#12335e]">
                  TOTAL
                </td>
                <td className="py-2 text-right text-base font-extrabold text-[#12335e]">
                  {CURRENCY} {fmt(t.total)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Notes / terms / signatures */}
      <div className="px-8 pb-8 pt-4 text-sm">
        {doc.notes && (
          <div className="mb-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#4a5d78]">
              Notes
            </p>
            <p className="mt-1 whitespace-pre-line">{doc.notes}</p>
          </div>
        )}
        {doc.terms && (
          <div className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#4a5d78]">
              Terms &amp; Conditions
            </p>
            <p className="mt-1 whitespace-pre-line text-[13px]">{doc.terms}</p>
          </div>
        )}
        <div className="mt-10 flex items-end justify-between gap-8">
          <div className="w-56 border-t border-[#33445f] pt-1 text-center text-[12px] text-[#4a5d78]">
            Customer Signature
          </div>
          <div className="w-56 text-center">
            <img
              src="/signature.png"
              alt="Authorized signature"
              className="mx-auto -mb-1 h-16 w-auto"
            />
            <div className="border-t border-[#33445f] pt-1 text-[12px] text-[#4a5d78]">
              For Ghafan Steel Works
            </div>
          </div>
        </div>
      </div>

      {/* Contact bar footer — pinned to page bottom */}
      <div className="mt-auto">
        <LetterheadFooter />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Editor
// ─────────────────────────────────────────────────────────────
export default function DocEditor({ initial, onSave, onBack }) {
  const [doc, setDoc] = useState(initial);
  const [tab, setTab] = useState("edit"); // mobile: edit | preview
  const [savedAt, setSavedAt] = useState(null);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setDirty(true);
  }, [doc]);

  const set = (patch) => setDoc((d) => ({ ...d, ...patch }));
  const setClient = (patch) =>
    setDoc((d) => ({ ...d, client: { ...d.client, ...patch } }));
  const setItem = (id, patch) =>
    setDoc((d) => ({
      ...d,
      items: d.items.map((it) => (it.id === id ? { ...it, ...patch } : it)),
    }));

  const addItem = () => setDoc((d) => ({ ...d, items: [...d.items, emptyItem()] }));
  const removeItem = (id) =>
    setDoc((d) => ({
      ...d,
      items: d.items.length > 1 ? d.items.filter((it) => it.id !== id) : d.items,
    }));

  const save = () => {
    onSave(doc);
    setDirty(false);
    setSavedAt(new Date());
  };

  const print = () => {
    onSave(doc);
    window.print();
  };

  const t = calcTotals(doc);

  return (
    <div className="container-x py-8">
      {/* Toolbar */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <button onClick={onBack} className="btn-ghost !px-4 !py-2 text-xs">
          ← All documents
        </button>
        <div className="flex flex-wrap items-center gap-2">
          {savedAt && !dirty && (
            <span className="text-xs text-emerald-400">
              Saved {savedAt.toLocaleTimeString()}
            </span>
          )}
          {doc.type === "invoice" ? (
            <button
              type="button"
              onClick={() =>
                set({ status: doc.status === "paid" ? "unpaid" : "paid" })
              }
              className={`flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                doc.status === "paid"
                  ? "border-emerald-500/60 bg-emerald-500/15 text-emerald-300"
                  : "border-red-500/40 bg-red-500/10 text-red-300"
              }`}
            >
              <span
                className={`relative h-4 w-8 rounded-full transition ${
                  doc.status === "paid" ? "bg-emerald-500" : "bg-iron"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${
                    doc.status === "paid" ? "left-4" : "left-0.5"
                  }`}
                />
              </span>
              {doc.status === "paid" ? "Paid" : "Not Paid"}
            </button>
          ) : (
            <select
              value={doc.status}
              onChange={(e) => set({ status: e.target.value })}
              className="rounded-md border border-edge bg-panel px-3 py-2 text-xs uppercase text-cloud outline-none"
            >
              <option value="draft">Draft</option>
              <option value="sent">Sent</option>
            </select>
          )}
          <button onClick={save} className="btn-ghost !px-4 !py-2 text-xs">
            Save
          </button>
          <button onClick={print} className="btn-primary !px-4 !py-2 text-xs">
            Print / PDF
          </button>
        </div>
      </div>

      {/* Mobile tabs */}
      <div className="no-print mt-4 flex gap-2 lg:hidden">
        {["edit", "preview"].map((v) => (
          <button
            key={v}
            onClick={() => setTab(v)}
            className={`flex-1 rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
              tab === v
                ? "border-accent bg-accent text-ink"
                : "border-edge bg-panel text-ash"
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        {/* Form */}
        <div
          className={`no-print space-y-6 ${tab === "edit" ? "" : "hidden lg:block"}`}
        >
          <div className="card space-y-4 p-5">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-400">
              Document
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Number</label>
                <input
                  className={inputCls}
                  value={doc.number}
                  onChange={(e) => set({ number: e.target.value })}
                />
              </div>
              <div>
                <label className={labelCls}>Date</label>
                <input
                  type="date"
                  className={inputCls}
                  value={doc.date}
                  onChange={(e) => set({ date: e.target.value })}
                />
              </div>
              {doc.type === "quotation" && (
                <div className="col-span-2">
                  <label className={labelCls}>Valid Until</label>
                  <input
                    type="date"
                    className={inputCls}
                    value={doc.validUntil}
                    onChange={(e) => set({ validUntil: e.target.value })}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="card space-y-4 p-5">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-400">
              Client
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Name</label>
                <input
                  className={inputCls}
                  value={doc.client.name}
                  onChange={(e) => setClient({ name: e.target.value })}
                  placeholder="Client name"
                />
              </div>
              <div>
                <label className={labelCls}>Company</label>
                <input
                  className={inputCls}
                  value={doc.client.company}
                  onChange={(e) => setClient({ company: e.target.value })}
                  placeholder="Company (optional)"
                />
              </div>
              <div>
                <label className={labelCls}>Phone</label>
                <input
                  className={inputCls}
                  value={doc.client.phone}
                  onChange={(e) => setClient({ phone: e.target.value })}
                  placeholder="05x-xxxxxxx"
                />
              </div>
              <div>
                <label className={labelCls}>Address</label>
                <input
                  className={inputCls}
                  value={doc.client.address}
                  onChange={(e) => setClient({ address: e.target.value })}
                  placeholder="Area, City"
                />
              </div>
            </div>
          </div>

          <div className="card space-y-3 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-400">
                Line Items
              </h3>
              <button
                onClick={addItem}
                className="rounded border border-edge px-3 py-1 text-xs text-cloud hover:border-accent"
              >
                + Add item
              </button>
            </div>
            {doc.items.map((it, i) => (
              <div key={it.id} className="rounded-lg border border-edge/60 bg-coal/60 p-3">
                <div className="flex items-start gap-2">
                  <span className="mt-2 w-5 shrink-0 text-center text-xs text-ash">
                    {i + 1}
                  </span>
                  <textarea
                    rows={2}
                    className={`${inputCls} resize-y`}
                    value={it.description}
                    onChange={(e) => setItem(it.id, { description: e.target.value })}
                    placeholder="Work description — e.g. MS sliding gate 4m × 2m, fabrication & installation"
                  />
                  <button
                    onClick={() => removeItem(it.id)}
                    className="mt-1 shrink-0 rounded px-2 py-1 text-xs text-red-400 hover:bg-red-950/40"
                    title="Remove"
                  >
                    ✕
                  </button>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2 pl-7">
                  <div>
                    <label className={labelCls}>Qty</label>
                    <input
                      type="number"
                      min="0"
                      step="any"
                      className={inputCls}
                      value={it.qty}
                      onChange={(e) => setItem(it.id, { qty: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Unit</label>
                    <input
                      className={inputCls}
                      value={it.unit}
                      onChange={(e) => setItem(it.id, { unit: e.target.value })}
                      placeholder="pcs / m / job"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Rate ({CURRENCY})</label>
                    <input
                      type="number"
                      min="0"
                      step="any"
                      className={inputCls}
                      value={it.rate}
                      onChange={(e) => setItem(it.id, { rate: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-edge/60 pt-3 text-sm">
              <div className="flex items-center gap-2">
                <label className="text-xs uppercase tracking-wider text-ash">
                  Discount ({CURRENCY})
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  className={`${inputCls} !w-28`}
                  value={doc.discount}
                  onChange={(e) => set({ discount: e.target.value })}
                />
              </div>
              <p className="font-display text-lg font-semibold text-white">
                {CURRENCY} {fmt(t.total)}
              </p>
            </div>
          </div>

          <div className="card space-y-4 p-5">
            <div>
              <label className={labelCls}>Notes (shown on document)</label>
              <textarea
                rows={2}
                className={`${inputCls} resize-y`}
                value={doc.notes}
                onChange={(e) => set({ notes: e.target.value })}
                placeholder="Any extra note for the client…"
              />
            </div>
            <div>
              <label className={labelCls}>Terms &amp; Conditions</label>
              <textarea
                rows={3}
                className={`${inputCls} resize-y`}
                value={doc.terms}
                onChange={(e) => set({ terms: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Live preview */}
        <div className={tab === "preview" ? "" : "hidden print:block lg:block"}>
          <DocPaper doc={doc} />
        </div>
      </div>
    </div>
  );
}
