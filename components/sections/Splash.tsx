import { SmoothScrollLink } from '@/components/SmoothScrollLink';
import { profile } from '@/content/site';

// The first screen a visitor lands on: a signature, the role and one way in.
// The nav stays hidden while this is in view (see SiteNav).
export function Splash() {
  return (
    <section
      id="intro"
      className="flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-band px-6 text-center"
    >
      {/* Drifts up and fades as the splash scrolls away (.splash-exit in globals.css). */}
      <div className="splash-exit flex flex-col items-center">
        <h1 className="font-script font-normal leading-[0.78] text-[#4a4a4a]">
          <span className="sr-only">
            {profile.firstName} {profile.lastName}
          </span>
          {/* Each line is wiped in left-to-right so the name reads as being written. */}
          <span
            aria-hidden="true"
            className="block -rotate-[8deg] text-[clamp(6rem,17vw,11rem)] motion-safe:animate-[write_1.4s_0.2s_cubic-bezier(0.6,0,0.3,1)_both]"
          >
            {profile.firstName}
          </span>
          <span
            aria-hidden="true"
            className="block -translate-y-2 translate-x-[12%] -rotate-[8deg] text-[clamp(5rem,14vw,9rem)] motion-safe:animate-[write_1s_1.3s_cubic-bezier(0.6,0,0.3,1)_both]"
          >
            {profile.lastName}
          </span>
        </h1>

        <p className="mt-14 text-xl text-ink motion-safe:animate-[rise_0.8s_2.1s_cubic-bezier(0.22,1,0.36,1)_both]">
          {profile.title}
        </p>
        <SmoothScrollLink
          targetId="home"
          className="mt-10 rounded-full border border-ink px-8 py-3 text-ink transition-colors hover:bg-ink hover:text-page motion-safe:animate-[rise_0.8s_2.3s_cubic-bezier(0.22,1,0.36,1)_both]"
        >
          See Portfolio
        </SmoothScrollLink>
      </div>
    </section>
  );
}
