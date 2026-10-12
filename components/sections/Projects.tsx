import { projects } from '@/content/site';

export function Projects() {
  return (
    <section id="projects" className="bg-page px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title" data-reveal>
          Projects
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.name}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${i * 120}ms` }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-10 transition-colors duration-300 hover:border-ink"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-6 font-display text-[9rem] font-semibold leading-none text-band transition-colors duration-500 group-hover:text-pill"
              >
                {p.index}
              </span>
              <p className="relative text-xs uppercase tracking-[0.2em] text-faint">
                Project {p.index}
              </p>
              <h3 className="relative mt-4 text-3xl font-normal text-ink">{p.name}</h3>
              <p className="relative mt-4 text-[17px] font-light leading-relaxed text-muted">
                {p.tagline}
              </p>
              <ul className="relative mt-8 space-y-3 border-t border-border pt-8 text-[15px] font-light leading-relaxed text-muted">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-ink" />
                    {h}
                  </li>
                ))}
              </ul>
              <ul className="relative mt-auto flex flex-wrap gap-2 pt-8">
                {p.tech.map((t) => (
                  <li key={t} className="pill">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
