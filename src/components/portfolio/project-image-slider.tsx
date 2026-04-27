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
          <div className="absolute bottom-3 left-3 rounded-full bg-neutral-950/80 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {hasMultipleImages && (
        <div className="flex items-center justify-between gap-3 border-t border-white/10 p-3">
          <button
            type="button"
            onClick={showPreviousImage}
            className="rounded-xl border border-white/10 px-3 py-2 text-sm text-neutral-200 transition hover:bg-white/5"
            aria-label={`Show previous image for ${projectTitle}`}
          >
            Previous
          </button>

          <button
            type="button"
            onClick={showNextImage}
            className="rounded-xl border border-white/10 px-3 py-2 text-sm text-neutral-200 transition hover:bg-white/5"
            aria-label={`Show next image for ${projectTitle}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}