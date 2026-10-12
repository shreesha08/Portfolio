import { links, nav, profile } from '@/content/site';
import { SocialLinks } from '@/components/SocialLinks';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-page px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {profile.firstName} {profile.lastName}
          </p>
          <p className="mt-1 text-sm font-light text-muted">Mobile Engineer · {profile.stack}</p>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-light text-muted">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className="transition-colors hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <SocialLinks links={links} variant="icon" />
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs font-light text-faint">
        © 2026 {profile.firstName} {profile.lastName}. All rights reserved.
      </p>
    </footer>
  );
}
