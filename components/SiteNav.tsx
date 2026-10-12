'use client';

import { useEffect, useState } from 'react';
import { nav } from '@/content/site';

// Centred, sticky anchor navigation. The link for the section currently in
// view gets an underline; on small screens the links collapse into a menu.
export function SiteNav() {
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Hidden while the landing splash fills the screen; it has its own way in.
  const [onSplash, setOnSplash] = useState(true);

  useEffect(() => {
    const ids = new Set<string>(nav.map(({ id }) => id));
    // The splash and hero are watched too, so the underline clears when scrolling back up.
    const sections = ['intro', 'home', ...ids]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // A section counts as active while it crosses the upper third of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(ids.has(entry.target.id) ? entry.target.id : '');
        }
      },
      { rootMargin: '-30% 0px -65% 0px' }
    );
    sections.forEach((s) => observer.observe(s));

    const splash = document.getElementById('intro');
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setOnSplash(splash ? splash.getBoundingClientRect().bottom > 80 : false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,transform] duration-300 ${
        scrolled ? 'bg-page/85 backdrop-blur-md' : 'bg-page'
      } ${onSplash && !open ? '-translate-y-full' : ''}`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-6xl items-center justify-center px-6"
      >
        <a
          href="#home"
          className="absolute left-6 font-display text-sm font-semibold tracking-wide text-ink md:hidden"
        >
          SR
        </a>

        <ul className="hidden items-center gap-12 md:flex">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`relative py-2 text-[17px] font-light transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:bg-ink after:transition-transform after:duration-300 ${
                  active === id
                    ? 'text-ink after:scale-x-100'
                    : 'text-muted after:scale-x-0 hover:text-ink'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="absolute right-4 p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-5rem)] bg-page px-6 pt-8 md:hidden"
      >
        <ul className="flex flex-col gap-6">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block text-3xl font-light text-ink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
