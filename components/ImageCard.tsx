import Image from "next/image";

type ImageCardProps = {
  src: string;
  alt: string;
  label?: string;
  description?: string;
};

/**
 * Reusable image panel designed for restaurant / food photography.
 * Place your files in `public/images` and update the `src` paths as needed.
 */
export function ImageCard({ src, alt, label, description }: ImageCardProps) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/10">
      <div className="relative h-56 w-full sm:h-72 md:h-80">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={false}
        />
      </div>
      {(label || description) && (
        <figcaption className="flex items-center justify-between gap-3 px-4 py-3 text-xs text-white/70">
          <div>
            {label && (
              <p className="uppercase tracking-[0.2em] text-white/60">
                {label}
              </p>
            )}
            {description && (
              <p className="mt-1 text-[11px] text-white/60">{description}</p>
            )}
          </div>
        </figcaption>
      )}
    </figure>
  );
}


