'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { SPLINE_SCENE } from '@/content/site';

// The Spline runtime is large, so it is split out and only fetched in the
// browser when a scene URL is set, the screen is wide enough, and the
// visitor hasn't asked for reduced motion.
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Keycaps />,
});

const LETTERS = ['R', 'A', 'O'];

function Keycaps() {
  return (
    <div
      className="flex h-full w-full scale-[0.85] items-center justify-center [perspective:1400px] md:scale-[1.3]"
      aria-hidden="true"
    >
      <div className="keycaps flex gap-3 rounded-[26px] bg-gradient-to-br from-[#e9e9e9] to-[#cfcfcf] p-4 shadow-[0_24px_0_#b8b8b8]">
        {LETTERS.map((l, i) => (
          <div key={i} className="keycap" style={{ ['--press-delay' as string]: `${i * 0.35}s` }}>
            <span>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroScene() {
  const [use3d, setUse3d] = useState(false);

  useEffect(() => {
    if (!SPLINE_SCENE) return;
    const wide = window.matchMedia('(min-width: 768px)');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setUse3d(wide.matches && !calm.matches);
    update();
    wide.addEventListener('change', update);
    calm.addEventListener('change', update);
    return () => {
      wide.removeEventListener('change', update);
      calm.removeEventListener('change', update);
    };
  }, []);

  return use3d ? <Spline scene={SPLINE_SCENE} className="h-full w-full" /> : <Keycaps />;
}
