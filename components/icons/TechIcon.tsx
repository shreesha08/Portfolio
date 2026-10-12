import {
  siAndroidstudio,
  siDart,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siMediapipe,
  siSwift,
  siXcode,
} from 'simple-icons';
import type { TechIcon as TechIconName } from '@/content/site';

// Brand marks from simple-icons, rendered monochrome like the reference grid.
const brand: Partial<Record<TechIconName, string>> = {
  swift: siSwift.path,
  flutter: siFlutter.path,
  dart: siDart.path,
  xcode: siXcode.path,
  androidstudio: siAndroidstudio.path,
  git: siGit.path,
  github: siGithub.path,
  firebase: siFirebase.path,
  mediapipe: siMediapipe.path,
};

// simple-icons has no mark for these three; simple line glyphs stand in.
function Custom({ name }: { name: TechIconName }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  if (name === 'swiftui') {
    return (
      <>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" {...common} />
        <path
          d="M7 15.5c3 1.8 6.8 1.5 9.5-1-1.6.6-3.6.5-5.5-.8 1.5-.6 3-2 4-3.7-2 1.6-4.5 2-6.5 1.2"
          {...common}
        />
      </>
    );
  }
  if (name === 'mlkit') {
    return (
      <>
        <circle cx="12" cy="12" r="3" {...common} />
        <circle cx="4.5" cy="5" r="1.8" {...common} />
        <circle cx="19.5" cy="5" r="1.8" {...common} />
        <circle cx="4.5" cy="19" r="1.8" {...common} />
        <circle cx="19.5" cy="19" r="1.8" {...common} />
        <path d="M6 6.3 9.8 10M18 6.3 14.2 10M6 17.7 9.8 14M18 17.7 14.2 14" {...common} />
      </>
    );
  }
  // gemma: a four-point spark
  return (
    <path
      d="M12 2c.8 5.6 4.4 9.2 10 10-5.6.8-9.2 4.4-10 10-.8-5.6-4.4-9.2-10-10 5.6-.8 9.2-4.4 10-10z"
      {...common}
    />
  );
}

export function TechIcon({ name, className }: { name: TechIconName; className?: string }) {
  const path = brand[name];
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {path ? <path d={path} fill="currentColor" /> : <Custom name={name} />}
    </svg>
  );
}
