import { TechIcon } from '@/components/icons/TechIcon';
import { skillGroups, technologies } from '@/content/site';

export function Technologies() {
  return (
    <section id="skills" className="bg-band px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title" data-reveal>
          Technologies
        </h2>

        <ul className="mt-16 grid grid-cols-3 gap-x-6 gap-y-14 sm:grid-cols-4 lg:grid-cols-6">
          {technologies.map(({ name, icon }, i) => (
            <li
              key={name}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${(i % 6) * 60}ms` }}
              className="group flex flex-col items-center gap-4 text-center"
            >
              <TechIcon
                name={icon}
                className="h-16 w-16 text-ink transition-transform duration-300 group-hover:-translate-y-1 md:h-20 md:w-20"
              />
              <span className="text-[15px] text-muted">{name}</span>
            </li>
          ))}
        </ul>

        <dl
          className="mt-20 grid gap-8 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4"
          data-reveal
        >
          {skillGroups.map((g) => (
            <div key={g.label}>
              <dt className="text-xs uppercase tracking-[0.18em] text-faint">{g.label}</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-page px-3 py-1 text-xs text-ink/80"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
