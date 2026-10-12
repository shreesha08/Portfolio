import { services } from '@/content/site';

export function Services() {
  return (
    <section id="what-i-do" className="bg-band px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title" data-reveal>
          What I Do
        </h2>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              className="bg-band p-10 transition-colors duration-300 hover:bg-page"
            >
              <span className="font-display text-sm font-semibold text-faint">0{i + 1}</span>
              <h3 className="mt-6 text-xl font-normal text-ink">{s.title}</h3>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
          {/* Sixth tile keeps the 2- and 3-column grids even and points onward. */}
          <li className="flex flex-col justify-between bg-ink p-10 text-page">
            <p className="text-xl font-light leading-snug">Have something in mind?</p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
            >
              Get in Touch
              <span aria-hidden="true">→</span>
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
