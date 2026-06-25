"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Icon } from "./Icons";

export default function GalleryGrid({ images = [] }) {
  const [active, setActive] = useState(null); // index or null

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  if (!images.length) return null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden rounded-xl border border-edge/70 bg-panel focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Image
              src={img.src}
              alt={img.alt || "Ghafan Steel Works"}
              width={800}
              height={600}
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-accent text-ink opacity-0 transition group-hover:opacity-100">
              <Icon name="arrow" className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-edge bg-panel text-cloud hover:text-white"
            onClick={close}
          >
            ✕
          </button>
          <button
            aria-label="Previous"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 rotate-180 place-items-center rounded-full border border-edge bg-panel text-cloud hover:text-white sm:left-6"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <Icon name="arrow" className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-edge bg-panel text-cloud hover:text-white sm:right-6"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <Icon name="arrow" className="h-5 w-5" />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[active].src}
              alt={images[active].alt || "Ghafan Steel Works"}
              width={1400}
              height={1000}
              className="mx-auto h-auto max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-sm text-ash">
              {active + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
