import { HeroScene } from '@/components/HeroScene';
import { profile } from '@/content/site';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center bg-page px-6 pb-24 pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="font-display text-[clamp(3.5rem,9vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-ink">
            <span className="block animate-[rise_0.9s_cubic-bezier(0.22,1,0.36,1)_both]">
              {profile.firstName}
            </span>
            <span className="block animate-[rise_0.9s_0.08s_cubic-bezier(0.22,1,0.36,1)_both]">
              {profile.lastName}
            </span>
          </h1>
          <p className="mt-8 animate-[rise_0.9s_0.16s_cubic-bezier(0.22,1,0.36,1)_both] text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-snug text-ink">
            {profile.title}
            <span className="block text-muted">{profile.stack}</span>
          </p>
          <p className="mt-6 max-w-lg animate-[rise_0.9s_0.24s_cubic-bezier(0.22,1,0.36,1)_both] text-lg font-light leading-relaxed text-muted">
            {profile.pitch}
          </p>
          <div className="mt-10 flex animate-[rise_0.9s_0.32s_cubic-bezier(0.22,1,0.36,1)_both] flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-ink px-8 py-4 font-medium text-page transition-transform hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-ink px-8 py-4 font-medium text-ink transition-colors hover:bg-ink hover:text-page"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative h-[240px] animate-[fade_1.2s_0.3s_ease-out_both] md:h-[520px]">
          <HeroScene />
        </div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm font-light text-muted transition-colors hover:text-ink md:flex"
      >
        Scroll to explore
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 animate-bounce motion-reduce:animate-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
