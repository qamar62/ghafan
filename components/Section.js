import Reveal from "./Reveal";

export function SectionHeading({ eyebrow, title, sub, center = false }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-ash">{sub}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="relative overflow-hidden border-b border-edge/60 diamond-plate pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 bg-steel-grid bg-[size:48px_48px] opacity-40" />
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent-glow blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-accent" />
            {eyebrow}
          </span>
          <h1 className="h-display mt-4 text-4xl text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {sub && <p className="mt-5 max-w-2xl text-lg text-ash">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}
