import { ContactForm } from '@/components/ContactForm';
import { SocialIcon } from '@/components/icons/Social';
import { contact, links, profile } from '@/content/site';

export function Contact() {
  const socials = [
    links.github && { name: 'github' as const, label: 'GitHub', href: links.github },
    links.linkedin && { name: 'linkedin' as const, label: 'LinkedIn', href: links.linkedin },
    links.email && { name: 'email' as const, label: 'Email', href: `mailto:${links.email}` },
  ].filter((s): s is Exclude<typeof s, '' | false> => Boolean(s));

  return (
    <section id="contact" className="bg-page px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <header className="text-center" data-reveal>
          <h2 className="section-title">{contact.heading}</h2>
          <p className="mt-5 text-lg font-light text-muted">{contact.body}</p>
        </header>

        <div className="mt-16 grid items-center gap-14 md:grid-cols-2 md:gap-16" data-reveal>
          <ContactForm web3formsKey={contact.web3formsKey} email={links.email} />

          <div>
            {socials.length > 0 && (
              <>
                <h3 className="text-2xl font-normal text-ink">Connect With Me</h3>
                <ul className="mt-5 flex gap-6">
                  {socials.map(({ name, label, href }) => (
                    <li key={name}>
                      <a
                        href={href}
                        aria-label={label}
                        {...(name !== 'email'
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="block text-ink transition-transform hover:-translate-y-0.5"
                      >
                        <SocialIcon name={name} className="h-9 w-9" />
                      </a>
                    </li>
                  ))}
                </ul>
                <hr className="my-8 border-border" />
              </>
            )}
            <dl className="space-y-3 font-light leading-relaxed text-muted">
              <div>
                <dt className="inline font-normal text-ink">Location: </dt>
                <dd className="inline">{profile.location}</dd>
              </div>
              {contact.status && (
                <div>
                  <dt className="inline font-normal text-ink">Status: </dt>
                  <dd className="inline">{contact.status}</dd>
                </div>
              )}
            </dl>
            {links.resume && (
              <a
                href={links.resume}
                download
                className="mt-8 inline-flex items-center gap-3 rounded-lg border border-ink px-6 py-3 text-ink transition-colors hover:bg-ink hover:text-page"
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
        </div>
      </div>
    </section>
  );
}
