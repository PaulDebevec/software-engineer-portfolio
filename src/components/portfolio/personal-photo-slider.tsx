"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PersonalPhoto = {
  src: string;
  alt: string;
};

type PersonalPhotoSliderProps = {
  photos: PersonalPhoto[];
};

const SLIDE_INTERVAL_MS = 6000;

export default function PersonalPhotoSlider({
  photos,
}: PersonalPhotoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);

  if (photos.length === 0) {
    return null;
  }

  const currentPhoto = photos[currentIndex];
  const hasMultiplePhotos = photos.length > 1;

  function resetTimer() {
    setTimerKey((current) => current + 1);
    setProgressKey((current) => current + 1);
  }

  function showPreviousPhoto() {
    setCurrentIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1
    );
    resetTimer();
  }

  function showNextPhoto() {
    setCurrentIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1
    );
    resetTimer();
  }

  function togglePause() {
    setIsPaused((current) => !current);
    resetTimer();
  }

  useEffect(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    if (!hasMultiplePhotos || isPaused || isHovered) {
      return;
    }

    timerRef.current = window.setTimeout(() => {
      setCurrentIndex((current) =>
        current === photos.length - 1 ? 0 : current + 1
      );
      setProgressKey((current) => current + 1);
    }, SLIDE_INTERVAL_MS);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [
    currentIndex,
    timerKey,
    hasMultiplePhotos,
    photos.length,
    isPaused,
    isHovered,
  ]);

  return (
    <div
      className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-900 shadow-lg shadow-black/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetTimer();
      }}
    >
      <div className="relative aspect-[3/4] md:aspect-auto md:h-[560px]">
        <Image
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />

        {hasMultiplePhotos && (
          <>
            <button
              type="button"
              onClick={showPreviousPhoto}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-950/70 text-xl text-neutral-100 backdrop-blur transition hover:bg-neutral-900/90"
              aria-label="Show previous personal photo"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={showNextPhoto}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-950/70 text-xl text-neutral-100 backdrop-blur transition hover:bg-neutral-900/90"
              aria-label="Show next personal photo"
            >
              ›
            </button>

            <button
              type="button"
              onClick={togglePause}
              className="absolute bottom-3 left-1/2 w-24 -translate-x-1/2 overflow-hidden rounded-full border border-white/10 bg-neutral-950/80 text-center text-xs text-neutral-200 backdrop-blur transition hover:bg-neutral-900/90"
              aria-label={isPaused ? "Resume personal photo slideshow" : "Pause personal photo slideshow"}
            >
              {!isPaused && !isHovered && (
                <div
                  key={progressKey}
                  className="absolute inset-y-0 left-0 bg-white/20 motion-safe:animate-[slide-progress_6s_linear_forwards]"
                />
              )}

              <span className="relative z-10 flex items-center justify-center gap-2 px-3 py-1">
                {currentIndex + 1} / {photos.length}
                <span>{isPaused ? "▶" : "❚❚"}</span>
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}