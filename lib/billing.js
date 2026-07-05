// ─────────────────────────────────────────────────────────────
//  Billing config + localStorage persistence for /admin
//  Company details taken from the official letterhead.
// ─────────────────────────────────────────────────────────────

export const company = {
  nameEn: "Ghafan Steel Works, Welding & Mechanical Repairing Workshop",
  nameAr: "ورشة غفان للحدادة واللحام والإصلاح الميكانيكي",
  division: "Engineering Division",
  tel: "04-2670994",
  mobiles: ["055-8225995", "050-7567201"],
  email: "awaiz.ghafan@gmail.com",
  poBox: "P.O. Box 20055, Dubai - U.A.E.",
  specialties:
    "Specialist in: Lathe Machine, Milling Machine jobs, Crank Shafts Grinding, Cylinder Block Boring, Cylinder Head Facing, Head Seats Cutting, Fabrication, Welding Jobs & all kinds of Mechanical Jobs, Auto Jobs & All Kinds of Spray Welding jobs. Electrical Repairs and Motor Winding.",
};

export const CURRENCY = "AED";
export const ADMIN_PASSCODE = "ghafan1991"; // change here anytime
const STORE_KEY = "ghafan_billing_docs_v1";
const AUTH_KEY = "ghafan_admin_auth";

export const emptyItem = () => ({
  id: crypto.randomUUID(),
  description: "",
  qty: 1,
  unit: "pcs",
  rate: 0,
});

export const emptyDoc = (type = "quotation") => ({
  id: crypto.randomUUID(),
  type, // "quotation" | "invoice"
  number: "",
  date: new Date().toISOString().slice(0, 10),
  validUntil: "",
  client: { name: "", company: "", phone: "", address: "" },
  items: [emptyItem()],
  discount: 0, // flat amount in AED
  notes: "",
  terms:
    type === "quotation"
      ? "Quotation valid for 15 days. 50% advance to confirm the job, balance on completion."
      : "Payment due on receipt. Cash / bank transfer accepted.",
  status: type === "invoice" ? "unpaid" : "draft", // quotation: draft|sent · invoice: unpaid|paid
  createdAt: Date.now(),
  updatedAt: Date.now(),
});

export const calcTotals = (doc) => {
  const subtotal = (doc.items || []).reduce(
    (s, it) => s + (Number(it.qty) || 0) * (Number(it.rate) || 0),
    0
  );
  const discount = Number(doc.discount) || 0;
  return { subtotal, discount, total: Math.max(subtotal - discount, 0) };
};

export const fmt = (n) =>
  (Number(n) || 0).toLocaleString("en-AE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

// ── persistence (browser localStorage) ──────────────────────
export const loadDocs = () => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
  } catch {
    return [];
  }
};

export const saveDoc = (doc) => {
  const docs = loadDocs();
  const i = docs.findIndex((d) => d.id === doc.id);
  const next = { ...doc, updatedAt: Date.now() };
  if (i >= 0) docs[i] = next;
  else docs.unshift(next);
  localStorage.setItem(STORE_KEY, JSON.stringify(docs));
  return next;
};

export const deleteDoc = (id) => {
  localStorage.setItem(
    STORE_KEY,
    JSON.stringify(loadDocs().filter((d) => d.id !== id))
  );
};

export const nextNumber = (type) => {
  const year = new Date().getFullYear();
  const prefix = type === "invoice" ? "INV" : "QTN";
  const nums = loadDocs()
    .filter((d) => d.type === type && (d.number || "").includes(`${year}`))
    .map((d) => parseInt((d.number || "").split("-").pop(), 10) || 0);
  const n = (nums.length ? Math.max(...nums) : 0) + 1;
  return `${prefix}-${year}-${String(n).padStart(3, "0")}`;
};

// ── passcode session ─────────────────────────────────────────
export const isAuthed = () =>
  typeof window !== "undefined" && sessionStorage.getItem(AUTH_KEY) === "1";
export const setAuthed = () => sessionStorage.setItem(AUTH_KEY, "1");
