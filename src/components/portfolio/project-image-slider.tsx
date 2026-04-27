"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectImageSliderProps = {
  images: ProjectImage[];
  projectTitle: string;
};

const SLIDE_INTERVAL_MS = 5000;

export default function ProjectImageSlider({
  images,
  projectTitle,
}: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  function resetTimer() {
    setTimerKey((current) => current + 1);
    setProgressKey((current) => current + 1);
  }

  function showPreviousImage() {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
    resetTimer();
  }

  function showNextImage() {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
    resetTimer();
  }

  function togglePause() {
    setIsPaused((prev) => !prev);
    setProgressKey((current) => current + 1);
  }

  useEffect(() => {
    if (!hasMultipleImages || isPaused) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCurrentIndex((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
      setProgressKey((current) => current + 1);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearTimeout(timer);
  }, [currentIndex, timerKey, hasMultipleImages, images.length]);

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

            <button
                type="button"
                onClick={togglePause}
                className="absolute bottom-3 left-1/2 w-24 -translate-x-1/2 overflow-hidden rounded-full border border-white/10 bg-neutral-950/80 text-center text-xs text-neutral-200 backdrop-blur transition hover:bg-neutral-900/90"
                aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
              >
                {!isPaused && (
                  <div
                    key={progressKey}
                    className="absolute inset-y-0 left-0 bg-white/20 motion-safe:animate-[slide-progress_5s_linear_forwards]"
                  />
                )}

                <span className="relative z-10 flex items-center justify-center gap-2 px-3 py-1">
                  {currentIndex + 1} / {images.length}
                  <span className="text-xs">
                    {isPaused ? "▶" : "❚❚"}
                  </span>
                </span>
              </button>
          </>
        )}
      </div>
    </div>
  );
}