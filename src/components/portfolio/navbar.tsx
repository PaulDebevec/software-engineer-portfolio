"use client";

import { useState } from "react";

type NavbarProps = {
  githubUrl: string;
  linkedinUrl: string;
};

export default function Navbar({
  githubUrl,
  linkedinUrl,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            Paul Debevec
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-neutral-200 transition hover:bg-white/5 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            Menu
          </button>

          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a href="#home" className="transition hover:text-neutral-100">
              Home
            </a>
            <a href="#projects" className="transition hover:text-neutral-100">
              Projects
            </a>
            <a href="#resume" className="transition hover:text-neutral-100">
              Resume
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neutral-100"
            >
              GitHub
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neutral-100"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        {menuOpen && (
          <nav className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 text-sm text-neutral-300 md:hidden">
            <a
              href="#home"
              className="transition hover:text-neutral-100"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className="transition hover:text-neutral-100"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#resume"
              className="transition hover:text-neutral-100"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neutral-100"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neutral-100"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}