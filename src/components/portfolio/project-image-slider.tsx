"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectImageSliderProps = {
  images: ProjectImage[];
  projectTitle: string;
};

export default function ProjectImageSlider({
  images,
  projectTitle,
}: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  function showPreviousImage() {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }

  function showNextImage() {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  }

  return (
    <div className="mb-6 overflow-hidden rounded-[1.25rem] border border-white/10 bg-neutral-900">
      <div className="relative">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={1200}
          height={700}
          className="h-auto w-full object-cover"
          priority={projectTitle === "Fitness Tracker Rails"}
        />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-950/70 text-xl text-neutral-100 backdrop-blur transition hover:bg-neutral-900/90"
              aria-label={`Show previous image for ${projectTitle}`}
            >
              ‹
            </button>

            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-950/70 text-xl text-neutral-100 backdrop-blur transition hover:bg-neutral-900/90"
              aria-label={`Show next image for ${projectTitle}`}
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-neutral-950/80 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}