/* Client component: cycles through images using Embla Carousel */
"use client";

import React, { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
  label?: string;
  description?: string;
};

type RotatingImageCardProps = {
  slides: Slide[];
  intervalMs?: number;
};

export function RotatingImageCard({ slides, intervalMs = 7000 }: RotatingImageCardProps) {
  const autoplay = useMemo(
    () => Autoplay({ delay: intervalMs, stopOnInteraction: false, stopOnMouseEnter: true }),
    [intervalMs]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 20, align: "start" },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  // Single slide: static
  if (slides.length <= 1) {
    const current = slides[0];
    return (
      <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/10">
        <div className="relative h-56 w-full sm:h-72 md:h-80">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </figure>
    );
  }

  return (
    <div className="relative">
      <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/10">
        {/* Embla viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          {/* Embla container */}
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%]">
                <div className="relative h-56 w-full sm:h-72 md:h-80">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {(slides[selectedIndex]?.label || slides[selectedIndex]?.description) && (
          <figcaption className="flex items-center justify-between gap-3 px-4 py-3 text-xs text-white/70">
            <div>
              {slides[selectedIndex]?.label && (
                <p className="uppercase tracking-[0.2em] text-white/60">
                  {slides[selectedIndex]?.label}
                </p>
              )}
              {slides[selectedIndex]?.description && (
                <p className="mt-1 text-[11px] text-white/60">
                  {slides[selectedIndex]?.description}
                </p>
              )}
            </div>
          </figcaption>
        )}
      </figure>

      {/* Indicators */}
      <div className="pointer-events-none absolute bottom-3 right-4 flex gap-1">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-4 rounded-full bg-white/20 transition-colors duration-300 ${
              i === selectedIndex ? "bg-white/80" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
