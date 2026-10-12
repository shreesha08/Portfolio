import type { Config } from 'tailwindcss';
import tokens from './lib/tokens';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userConfig: any = tokens;

// Classes derived from custom theme tokens (bg-brand-700, text-accent) can
// be missed by the content scanner when a page had to fall back to a
// dangerouslySetInnerHTML string. Safelist every colour utility for every
// token in lib/tokens.ts so the brand classes are never purged.
type Safelist = (string | { pattern: RegExp })[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safelistFromTheme(cfg: any): Safelist {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const merged: Record<string, any> = {
    ...(cfg?.theme?.colors ?? {}),
    ...(cfg?.theme?.extend?.colors ?? {}),
  };
  const out: Safelist = [];
  const PREFIXES = [
    'bg',
    'text',
    'border',
    'ring',
    'ring-offset',
    'from',
    'to',
    'via',
    'fill',
    'stroke',
    'shadow',
    'divide',
    'outline',
    'accent',
    'caret',
    'placeholder',
    'decoration',
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const walk = (prefix: string, node: any) => {
    if (!node) return;
    if (typeof node === 'string') {
      const name = prefix.replace(/^-/, '');
      if (!name) return;
      for (const p of PREFIXES) out.push(`${p}-${name}`);
      return;
    }
    if (typeof node === 'object') {
      for (const k of Object.keys(node)) walk(`${prefix}-${k}`, node[k]);
    }
  };
  for (const k of Object.keys(merged)) walk(k, merged[k]);
  const baseStrings = out.filter((c): c is string => typeof c === 'string');
  for (const base of baseStrings) {
    const safe = base.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    out.push({ pattern: new RegExp(`^${safe}\\/(?:\\d{1,3})$`) });
  }
  return out;
}

const config: Config = {
  content: ['./app/**/*.{tsx,ts,jsx,js,mdx}', './components/**/*.{tsx,ts,jsx,js}'],
  safelist: safelistFromTheme(userConfig),
  theme: {
    extend: userConfig?.theme?.extend ?? {},
    ...(userConfig?.theme
      ? Object.keys(userConfig.theme)
          .filter((k) => k !== 'extend')
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .reduce((a: any, k) => ((a[k] = userConfig.theme[k]), a), {})
      : {}),
  },
  plugins: [],
};

export default config;
