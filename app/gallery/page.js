import { PageHero } from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { getImages } from "@/lib/gallery";
import { site } from "@/lib/site";

export const metadata = {
  title: "Photo Gallery",
  description:
    "Photos of steel fabrication, welding and workshop work by Ghafan Steel Works in Al Qusais, Dubai.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const images = getImages("gallery");

  return (
    <>
      <PageHero
        eyebrow="From the workshop"
        title="Gallery"
        sub="Real photos of our steel fabrication, welding and finished work in Al Qusais, Dubai."
      />

      <section className="container-x py-16 md:py-20">
        {images.length > 0 ? (
          <Reveal>
            <GalleryGrid images={images} />
          </Reveal>
        ) : (
          <Reveal className="mx-auto max-w-2xl rounded-2xl border border-dashed border-edge bg-panel/50 p-10 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-coal text-accent">
              <Icon name="ruler" className="h-7 w-7" />
            </span>
            <h2 className="h-display mt-5 text-2xl text-white">Photos coming soon</h2>
            <p className="mt-3 text-ash">
              We&apos;re adding our latest project photos here. In the meantime,
              see live photos and reviews on our Google profile, or message us
              for examples of past work.
            </p>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              View on Google
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </Reveal>
        )}
      </section>

      <CTABand />
    </>
  );
}
