import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[70vh] place-items-center py-32 text-center">
      <div>
        <span className="font-display text-7xl font-bold text-white/10">404</span>
        <h1 className="h-display mt-2 text-3xl text-white">Page not found</h1>
        <p className="mt-3 text-ash">The page you&apos;re looking for has been moved or doesn&apos;t exist.</p>
        <Link href="/" className="btn-primary mt-7">
          Back home
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
