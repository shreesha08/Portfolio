'use client';

import { useEffect } from 'react';

// Fades [data-reveal] elements in as they scroll into view. The hidden start
// state only applies under html.js (set by an inline script in app/layout.tsx),
// so no-JS visitors and crawlers always see the content.
export function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
