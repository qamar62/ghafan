"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  ADMIN_PASSCODE,
  CURRENCY,
  calcTotals,
  deleteDoc,
  emptyDoc,
  fmt,
  isAuthed,
  loadDocs,
  nextNumber,
  saveDoc,
  setAuthed,
} from "@/lib/billing";
import DocEditor from "@/components/admin/DocEditor";
import LetterheadPaper from "@/components/admin/Letterhead";

// ─────────────────────────────────────────────────────────────
//  Passcode gate
// ─────────────────────────────────────────────────────────────
function Gate({ onUnlock }) {
  const [code, setCode] = useState("");
  const [err, setErr] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (code === ADMIN_PASSCODE) {
      setAuthed();
      onUnlock();
    } else {
      setErr(true);
      setCode("");
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5">
      <form onSubmit={submit} className="card w-full max-w-sm p-8 text-center">
        <Image
          src="/logo.png"
          alt="Ghafan Steel Works"
          width={64}
          height={64}
          className="mx-auto mb-4"
        />
        <h1 className="h-display text-2xl">Admin Access</h1>
        <p className="mt-2 text-sm text-ash">
          Enter the passcode to manage quotations &amp; invoices.
        </p>
        <input
          type="password"
          value={code}
          autoFocus
          onChange={(e) => {
            setCode(e.target.value);
            setErr(false);
          }}
          placeholder="Passcode"
          className="mt-6 w-full rounded-md border border-edge bg-coal px-4 py-3 text-center tracking-widest text-cloud outline-none focus:border-accent"
        />
        {err && (
          <p className="mt-2 text-sm text-red-400">Incorrect passcode.</p>
        )}
        <button type="submit" className="btn-primary mt-4 w-full">
          Unlock
        </button>
      </form>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Saved documents list
// ─────────────────────────────────────────────────────────────
const statusStyle = {
  draft: "bg-iron text-cloud",
  sent: "bg-amber-500/20 text-amber-300 border border-amber-500/40",
  unpaid: "bg-red-500/15 text-red-300 border border-red-500/40",
  paid: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",
};

function DocList({ docs, onNew, onEdit, onDelete, onDuplicate, onLetterhead }) {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");

  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return docs
      .filter((d) => (filter === "all" ? true : d.type === filter))
      .filter(
        (d) =>
          !s ||
          (d.number || "").toLowerCase().includes(s) ||
          (d.client?.name || "").toLowerCase().includes(s) ||
          (d.client?.company || "").toLowerCase().includes(s)
      );
  }, [docs, q, filter]);

  return (
    <div className="container-x py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Admin</p>
          <h1 className="h-display mt-1 text-3xl sm:text-4xl">
            Quotations &amp; Invoices
          </h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={onLetterhead} className="btn-ghost">
            Letterhead
          </button>
          <button onClick={() => onNew("quotation")} className="btn-ghost">
            + Quotation
          </button>
          <button onClick={() => onNew("invoice")} className="btn-primary">
            + Invoice
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by number, client or company…"
          className="w-full rounded-md border border-edge bg-panel px-4 py-2.5 text-sm text-cloud outline-none focus:border-accent"
        />
        <div className="flex shrink-0 gap-2">
          {["all", "quotation", "invoice"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                filter === f
                  ? "border-accent bg-accent text-ink"
                  : "border-edge bg-panel text-ash hover:text-cloud"
              }`}
            >
              {f === "all" ? "All" : `${f}s`}
            </button>
          ))}
        </div>
      </div>

      {shown.length === 0 ? (
        <div className="card mt-8 p-12 text-center text-ash">
          No documents yet. Create your first quotation or invoice above.
        </div>
      ) : (
        <div className="mt-6 grid gap-3">
          {shown.map((d) => {
            const t = calcTotals(d);
            return (
              <div
                key={d.id}
                className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <button
                  onClick={() => onEdit(d)}
                  className="min-w-0 flex-1 text-left"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-lg font-semibold text-white">
                      {d.number || "(no number)"}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        d.type === "invoice"
                          ? "bg-accent text-ink"
                          : "bg-steel text-cloud"
                      }`}
                    >
                      {d.type}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${statusStyle[d.status] || statusStyle.draft}`}
                    >
                      {d.status}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm text-ash">
                    {d.client?.name || "—"}
                    {d.client?.company ? ` · ${d.client.company}` : ""} ·{" "}
                    {d.date}
                  </p>
                </button>
                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <span className="font-display text-lg font-semibold text-white">
                    {CURRENCY} {fmt(t.total)}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(d)}
                      className="rounded border border-edge px-3 py-1.5 text-xs text-cloud hover:border-accent"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDuplicate(d)}
                      className="rounded border border-edge px-3 py-1.5 text-xs text-cloud hover:border-accent"
                      title="Duplicate"
                    >
                      Copy
                    </button>
                    <button
                      onClick={() => onDelete(d)}
                      className="rounded border border-red-900/60 px-3 py-1.5 text-xs text-red-400 hover:border-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Letterhead view
// ─────────────────────────────────────────────────────────────
function LetterheadView({ onBack }) {
  return (
    <div className="container-x py-8">
      <div className="no-print flex flex-wrap items-center justify-between gap-3 pb-5">
        <button onClick={onBack} className="btn-ghost !px-4 !py-2 text-xs">
          ← All documents
        </button>
        <button
          onClick={() => window.print()}
          className="btn-primary !px-4 !py-2 text-xs"
        >
          Print / Download PDF
        </button>
      </div>
      <LetterheadPaper />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Page
// ─────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthedState] = useState(false);
  const [docs, setDocs] = useState([]);
  const [editing, setEditing] = useState(null); // doc being edited
  const [showLetterhead, setShowLetterhead] = useState(false);

  useEffect(() => {
    setAuthedState(isAuthed());
    setDocs(loadDocs());
    setReady(true);
  }, []);

  if (!ready) return null;
  if (!authed) return <Gate onUnlock={() => setAuthedState(true)} />;

  const handleNew = (type) => {
    const d = emptyDoc(type);
    d.number = nextNumber(type);
    setEditing(d);
  };

  const handleSave = (doc) => {
    saveDoc(doc);
    setDocs(loadDocs());
  };

  const handleDelete = (doc) => {
    if (!confirm(`Delete ${doc.number || "this document"}? This cannot be undone.`))
      return;
    deleteDoc(doc.id);
    setDocs(loadDocs());
  };

  const handleDuplicate = (doc) => {
    const copy = {
      ...structuredClone(doc),
      id: crypto.randomUUID(),
      number: nextNumber(doc.type),
      date: new Date().toISOString().slice(0, 10),
      status: "draft",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    saveDoc(copy);
    setDocs(loadDocs());
    setEditing(copy);
  };

  if (showLetterhead)
    return <LetterheadView onBack={() => setShowLetterhead(false)} />;

  return editing ? (
    <DocEditor
      initial={editing}
      onSave={handleSave}
      onBack={() => {
        setEditing(null);
        setDocs(loadDocs());
      }}
    />
  ) : (
    <DocList
      docs={docs}
      onNew={handleNew}
      onEdit={(d) => setEditing(d)}
      onDelete={handleDelete}
      onDuplicate={handleDuplicate}
      onLetterhead={() => setShowLetterhead(true)}
    />
  );
}
