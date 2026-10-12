import type { Metadata } from 'next';
import { Hurricane, Montserrat, Poppins } from 'next/font/google';
import { profile } from '@/content/site';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Handwritten signature on the landing splash.
const hurricane = Hurricane({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
  display: 'swap',
});

const title = `${profile.firstName} ${profile.lastName} | ${profile.title}`;

export const metadata: Metadata = {
  title,
  description: profile.pitch,
  openGraph: { title, description: profile.pitch, type: 'website' },
  twitter: { card: 'summary', title, description: profile.pitch },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script adds the `js` class before hydration.
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${hurricane.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Mark JS as available before first paint so reveal animations never flash. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="bg-page font-sans text-ink antialiased selection:bg-ink selection:text-page">
        {children}
      </body>
    </html>
  );
}
