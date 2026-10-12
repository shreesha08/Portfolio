import { education } from '@/content/site';

// Hidden until the details are filled in content/site.ts.
export function Education() {
  if (!education.degree) return null;
  return (
    <section id="education" className="bg-page px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title" data-reveal>
          Education
        </h2>
        <article data-reveal className="mt-14 max-w-2xl rounded-xl border border-border p-8">
          <h3 className="text-[22px] font-normal text-ink">{education.degree}</h3>
          <p className="mt-2 text-[15px] text-faint">
            {[education.institution, education.location, education.years]
              .filter(Boolean)
              .join(' · ')}
          </p>
          {education.detail && (
            <p className="mt-5 text-[15px] font-light leading-[1.75] text-muted">
              {education.detail}
            </p>
          )}
        </article>
      </div>
    </section>
  );
}
