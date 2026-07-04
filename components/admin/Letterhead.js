"use client";

/**
 * Letterhead artwork — public/letterheadv2.png (full A4 design, 1054×1492).
 * The same artwork is used three ways:
 *   - LetterheadPaper: the full page (standalone letterhead → print/PDF)
 *   - LetterheadHeader: top branding band, cropped, for invoices/quotations
 *   - LetterheadFooter: thin bottom contact bar (tel/mob/email), cropped
 * Crop fractions measured from the image (header ends ~19.6%, contact
 * bar starts ~95%).
 */
const IMG = "/letterheadv2.png";
const IMG_W = 1054;
const IMG_H = 1492;
const HEAD_END = 0.21; // top 21% = branding header
const FOOT_START = 0.949; // bottom ~5% = thin contact bar only (tel/mob/email/PO box)

export function LetterheadHeader() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${IMG_W} / ${IMG_H * HEAD_END}` }}
    >
      <img
        src={IMG}
        alt="Ghafan Steel Works letterhead"
        className="absolute left-0 top-0 w-full"
      />
    </div>
  );
}

export function LetterheadFooter() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${IMG_W} / ${IMG_H * (1 - FOOT_START)}` }}
    >
      <img
        src={IMG}
        alt=""
        className="absolute bottom-0 left-0 w-full"
      />
    </div>
  );
}

export default function LetterheadPaper() {
  return (
    <div className="print-doc mx-auto w-full max-w-[794px] bg-white shadow-plate">
      <img
        src={IMG}
        alt="Ghafan Steel Works letterhead"
        className="block h-auto w-full"
      />
    </div>
  );
}
