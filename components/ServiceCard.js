import { Icon } from "./Icons";

export default function ServiceCard({ service, index }) {
  return (
    <div className="group card relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
      <div className="absolute right-0 top-0 select-none font-display text-7xl font-bold text-white/[0.03]">
        {String(index + 1).padStart(2, "0")}
      </div>
      <span className="grid h-14 w-14 place-items-center rounded-lg border border-edge bg-coal text-accent transition-colors group-hover:bg-accent-sheen group-hover:text-ink">
        <Icon name={service.icon} className="h-7 w-7" />
      </span>
      <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ash">{service.short}</p>
      <ul className="mt-5 space-y-2">
        {service.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-cloud/90">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
