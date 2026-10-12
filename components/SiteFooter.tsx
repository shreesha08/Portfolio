import { SmoothScrollLink } from '@/components/SmoothScrollLink';
import { profile } from '@/content/site';

const footerLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 py-12 text-page">
      <div className="mx-auto grid max-w-6xl items-center gap-8 text-center md:grid-cols-[1fr_auto_1fr] md:text-left">
        <div>
          <p className="text-lg">
            {profile.firstName} {profile.lastName}
          </p>
          <p className="mt-1 text-sm font-light text-page/60">
            {profile.title} | {profile.stack}
          </p>
        </div>

        <div className="text-center">
          <ul className="flex justify-center gap-6 text-sm font-light text-page/70">
            {footerLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-page">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-light text-page/40">
            © 2026 {profile.firstName} {profile.lastName}. All rights reserved.
          </p>
        </div>

        <div className="md:text-right">
          <SmoothScrollLink
            targetId="intro"
            className="text-sm font-light text-page/70 transition-colors hover:text-page"
          >
            <span aria-hidden="true">↑</span> Back to Top
          </SmoothScrollLink>
        </div>
      </div>
    </footer>
  );
}
