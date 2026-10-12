'use client';

import type { ReactNode } from 'react';

// Native smooth scrolling is quick and unevenly paced, which reads as a jump
// on a full-screen move. This glides to the target with an ease-in-out curve
// instead. Without JS it is still a plain anchor link.
const DURATION = 1200;
// With Reduce Motion on, the glide still runs (the visitor asked for this move
// by clicking) but shorter, so it reads as a calm transition rather than a jump.
const REDUCED_DURATION = 700;
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export function SmoothScrollLink({
  targetId,
  className,
  children,
}: {
  targetId: string;
  className?: string;
  children: ReactNode;
}) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(targetId);
    if (!target || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();

    const root = document.documentElement;
    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + startY;
    const done = () => {
      root.style.scrollBehavior = '';
      history.replaceState(null, '', `#${targetId}`);
      target.focus({ preventScroll: true });
    };

    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? REDUCED_DURATION
      : DURATION;

    // The page-wide `scroll-behavior: smooth` would fight each frame's scrollTo.
    root.style.scrollBehavior = 'auto';
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - t0) / duration, 1);
      window.scrollTo(0, startY + (endY - startY) * easeInOutCubic(t));
      if (t < 1) requestAnimationFrame(step);
      else done();
    };
    requestAnimationFrame(step);
  };

  return (
    <a href={`#${targetId}`} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
