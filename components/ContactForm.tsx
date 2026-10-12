'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'w-full rounded-lg bg-band px-6 py-4 text-ink placeholder:text-faint transition-shadow focus:outline-none focus:ring-2 focus:ring-ink/60';

// With a Web3Forms key the message is posted from the page. Without one,
// the form opens the visitor's mail app with everything filled in.
export function ContactForm({ web3formsKey, email }: { web3formsKey: string; email: string }) {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const from = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    // Nowhere to deliver yet (no key, no address in content/site.ts).
    if (!web3formsKey && !email) {
      setStatus('error');
      return;
    }

    if (!web3formsKey) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `Portfolio enquiry from ${name}`,
          name,
          email: from,
          message,
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (!res.ok || !json.success) throw new Error('send failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <label className="sr-only" htmlFor="cf-name">
        Name
      </label>
      <input
        id="cf-name"
        name="name"
        required
        autoComplete="name"
        placeholder="Name"
        className={field}
      />
      <label className="sr-only" htmlFor="cf-email">
        Email
      </label>
      <input
        id="cf-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className={field}
      />
      <label className="sr-only" htmlFor="cf-message">
        Message
      </label>
      <textarea
        id="cf-message"
        name="message"
        required
        rows={6}
        placeholder="Message"
        className={`${field} resize-y`}
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-lg bg-ink py-4 font-medium text-page transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
      <p role="status" aria-live="polite" className="-mt-2 min-h-[1.5rem] text-sm">
        {status === 'sent' && (
          <span className="text-ink">Thanks — your message is on its way.</span>
        )}
        {status === 'error' && (
          <span className="text-[#b42318]">
            Something went wrong.{' '}
            {email ? (
              <>
                Please email{' '}
                <a href={`mailto:${email}`} className="underline">
                  {email}
                </a>
                .
              </>
            ) : (
              'Please try again.'
            )}
          </span>
        )}
      </p>
    </form>
  );
}
