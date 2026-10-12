import { experience } from '@/content/site';

// Vertical timeline: a centre spine with a dot per role, cards alternating
// sides on wide screens and stacked to the right of the spine on narrow ones.
export function Experience() {
  return (
    <section id="experience" className="bg-band px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title" data-reveal>
          Experience
        </h2>

        <ol className="relative mt-16">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-px bg-[#bdbdbd] md:left-1/2"
          />
          {experience.map((r, i) => {
            const right = i % 2 === 1;
            return (
              <li
                key={`${r.company}-${r.dates}`}
                className="relative pb-12 pl-10 last:pb-0 md:grid md:grid-cols-2 md:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-10 h-[15px] w-[15px] rounded-full bg-ink ring-4 ring-band md:left-1/2 md:-translate-x-1/2"
                />
                <article
                  data-reveal
                  className={`rounded-xl bg-card p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${
                    right ? 'md:col-start-2 md:ml-14' : 'md:mr-14'
                  }`}
                >
                  <h3 className="text-[22px] font-normal leading-snug text-ink">{r.title}</h3>
                  <p className="mt-1 text-[17px] text-ink/80">{r.company}</p>
                  <p className="mt-2 text-[15px] text-faint">
                    {r.dates} <span aria-hidden="true">·</span> {r.type}
                  </p>
                  <p className="mt-5 text-[15px] font-light leading-[1.75] text-muted">
                    {r.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[15px] font-light leading-[1.7] text-muted">
                    {r.bullets.map((b) => (
                      <li
                        key={b}
                        className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-faint"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {r.tech.map((t) => (
                      <li key={t} className="pill">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
