import { SocialIcon } from '@/components/icons/Social';
import type { links as Links } from '@/content/site';

type Props = { links: typeof Links; variant: 'icon' | 'button' };

// Renders only the links that have been filled in content/site.ts.
export function SocialLinks({ links, variant }: Props) {
  const items = [
    links.email && { name: 'email' as const, label: 'Email', href: `mailto:${links.email}` },
    links.linkedin && { name: 'linkedin' as const, label: 'LinkedIn', href: links.linkedin },
    links.github && { name: 'github' as const, label: 'GitHub', href: links.github },
  ].filter((i): i is Exclude<typeof i, '' | false> => Boolean(i));

  if (items.length === 0) return null;

  return (
    <ul className={variant === 'icon' ? 'flex gap-3' : 'flex flex-wrap justify-center gap-4'}>
      {items.map(({ name, label, href }) => {
        const external = name !== 'email';
        return (
          <li key={name}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={variant === 'icon' ? label : undefined}
              className={
                variant === 'icon'
                  ? 'flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-ink hover:text-page'
                  : 'flex items-center gap-3 rounded-lg border border-ink px-6 py-3 text-ink transition-colors hover:bg-ink hover:text-page'
              }
            >
              <SocialIcon name={name} className="h-4 w-4" />
              {variant === 'button' && <span>{label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
