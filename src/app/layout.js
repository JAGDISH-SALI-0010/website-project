import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Add Google Search Console verification meta tag here once generated
// e.g. verification: { google: 'YOUR_VERIFICATION_CODE_HERE' }

export const metadata = {
  metadataBase: new URL('https://pydisciple.vercel.app'),
  verification: { google: 'fKMpWCUQCU3Eu2TddF0Q6euCAIGWe9f0NU6cLCbGNnw' },
  title: {
    default: 'PyDisciple — Curated Python Learning Resources',
    template: '%s | PyDisciple',
  },
  description:
    'PyDisciple is a curated platform of the best Python learning resources — books, courses, roadmaps, documentation, and tools — hand-picked so you spend less time searching and more time learning.',

  openGraph: {
    title: 'PyDisciple — Curated Python Learning Resources',
    description:
      'Hand-picked Python books, courses, roadmaps, documentation, and tools — all in one place. No noise, just quality.',
    url: 'https://pydisciple.vercel.app',
    siteName: 'PyDisciple',
    images: [
      {
        // Replace with the actual OG image path once generated (e.g. /og-image.png)
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PyDisciple — Curated Python Learning Resources',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'PyDisciple — Curated Python Learning Resources',
    description:
      'Hand-picked Python books, courses, roadmaps, docs, and tools. Learn Python without the noise.',
    images: ['/og-image.png'],
  },
};

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var initialTheme = saved || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', initialTheme);
    } catch (e) {}

    // Global Native Click Handler (Works 100% even without React hydration)
    document.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-theme-toggle]');
      if (btn) {
        e.preventDefault();
        var current = document.documentElement.getAttribute('data-theme') || 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try {
          localStorage.setItem('theme', next);
        } catch (err) {}
      }
    }, true);
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.variable}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
