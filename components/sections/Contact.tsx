import { SocialLinks } from '@/components/SocialLinks';
import { contact, links, profile } from '@/content/site';

export function Contact() {
  return (
    <section id="contact" className="bg-page px-6 py-32">
      <div className="mx-auto max-w-3xl text-center" data-reveal>
        <h2 className="section-title">{contact.heading}</h2>
        <p className="mx-auto mt-8 max-w-2xl text-[17px] font-light leading-[1.85] text-muted">
          {contact.body}
        </p>
        <div className="mt-12">
          <SocialLinks links={links} variant="button" />
        </div>
        <p className="mt-10 text-sm font-light text-faint">{profile.location}</p>
      </div>
    </section>
  );
}
