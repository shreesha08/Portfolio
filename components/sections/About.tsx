import { about, links } from '@/content/site';

export function About() {
  return (
    <section id="about" className="bg-page px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title" data-reveal>
          About Me
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div data-reveal>
            <p className="text-2xl font-normal leading-relaxed text-ink">{about.lead}</p>
            {about.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-7 text-[17px] font-light leading-[1.85] text-muted"
              >
                {p}
              </p>
            ))}
            {links.resume && (
              <a
                href={links.resume}
                download
                className="mt-10 inline-flex items-center gap-3 rounded-lg bg-ink px-6 py-3.5 text-page transition-transform hover:-translate-y-0.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                  <path d="M14 3v5h5M12 12v6M9.5 15.5 12 18l2.5-2.5" />
                </svg>
                Download Resume
              </a>
            )}
          </div>

          <ul className="grid grid-cols-2 gap-6 self-start lg:gap-8">
            {about.stats.map((s, i) => (
              <li
                key={s.label}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
                className="flex aspect-[4/5] flex-col items-center justify-center rounded-xl bg-band px-4 text-center"
              >
                <span
                  className={`font-display font-semibold leading-tight text-ink ${
                    // Wordy values ("iOS + Android") get a smaller size so they fit the tile.
                    s.value.length > 6
                      ? 'text-[clamp(1.25rem,2.4vw,2rem)]'
                      : 'text-[clamp(1.6rem,3.6vw,3rem)]'
                  }`}
                >
                  {s.value}
                </span>
                <span className="mt-3 text-[15px] text-muted">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
