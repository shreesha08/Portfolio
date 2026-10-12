import { Reveal } from '@/components/Reveal';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { Technologies } from '@/components/sections/Technologies';

// One page, sections in the reference's order. Section backgrounds alternate
// white / grey; keep that rhythm when adding or reordering sections.
export default function Page() {
  return (
    <main>
      <Hero />
      <Technologies />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Education />
      <Contact />
      <Reveal />
    </main>
  );
}
