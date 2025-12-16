import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/Section";
import { ImageCard } from "@/components/ImageCard";
import { site } from "@/content/site";
import { signatureItems } from "@/content/menu";
import { getTodayHours } from "@/content/openingHours";

export default function HomePage() {
  return (
    <>
      <Section
        id="hero"
        padded
        className="relative pb-20 pt-20 sm:pt-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(197,164,109,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(197,164,109,0.14),_transparent_55%)]" />

        {/* Full-width hero image with text directly over it */}
        <div className="relative h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 sm:h-[420px] md:h-[480px]">
          <Image
            src="/images/interior-hero.jpg"
            alt="Low, warm lighting over the Shisu Sushi omakase counter."
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 py-10 sm:px-10 md:px-14 md:py-14">
            <p className="text-xs uppercase tracking-[0.35em] text-shisu-gold">
              Omakase & Modern Sushi Bar
            </p>
            <div className="mt-4 max-w-2xl space-y-6">
              <h1 className="text-balance text-3xl font-light tracking-tightest sm:text-5xl md:text-6xl">
                {site.heroHeadline}
              </h1>
              <p className="max-w-xl text-sm text-white/80 sm:text-base">
                {site.heroSubcopy}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/reservations"
                className="rounded-full bg-shisu-gold px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-shisu-black hover:bg-shisu-gold/90"
              >
                Reserve a seat
              </Link>
              <Link
                href="/menu"
                className="rounded-full border border-white/30 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/85 hover:border-white hover:text-white"
              >
                View menu
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Signatures"
        title="A few things we're known for."
        description="A preview of the counter. The full omakase and à la carte menu changes with the water."
        borderedTop
        borderedBottom
      >
        <div className="grid gap-6 md:grid-cols-3">
          {signatureItems.map((item) => (
            <article
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-shisu-ivory">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-xs text-white/65">{item.description}</p>
                )}
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-[11px] text-white/60">
                <span className="h-px w-6 bg-white/20" />
                <span className="uppercase tracking-[0.25em]">
                  {item.tags?.includes("chef_special")
                    ? "Chef’s counter"
                    : "Signature"}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-sm text-white/70">
          <span className="mr-3 text-xs uppercase tracking-[0.2em] text-white/50">
            Explore
          </span>
          <Link href="/menu" className="underline-offset-4 hover:underline">
            See the full menu
          </Link>
        </div>
      </Section>

      <Section borderedBottom>
        <div className="grid gap-10 md:grid-cols-3">
          {site.highlights.map((highlight) => (
            <div key={highlight.title} className="space-y-2 text-sm text-white/70">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                {highlight.title}
              </p>
              <p>{highlight.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Sushi photography strip – add your own files into public/images */}
          <ImageCard
            src="/images/sushi-omakase.jpg"
            alt="A row of nigiri plated neatly across a dark counter."
            label="Omakase"
            description="Nigiri served one piece at a time, in conversation with the counter."
          />
          <ImageCard
            src="/images/sushi-detail.jpg"
            alt="Close-up of a single piece of toro nigiri."
            label="Details"
            description="Every grain of rice, each brush of nikiri—nothing rushed."
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 text-xs text-white/60">
          {(() => {
            const today = getTodayHours();
            const isClosed = !today.open || !today.close;
            return (
              <>
                <span className="uppercase tracking-[0.25em] text-white/50">
                  Today
                </span>
                <span>
                  {today.day}:{" "}
                  {isClosed ? "Closed" : `${today.open} – ${today.close}`}
                </span>
              </>
            );
          })()}
        </div>
      </Section>
    </>
  );
}
