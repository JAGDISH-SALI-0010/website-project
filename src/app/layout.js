import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "PyDisciple",
  description:
    "Master Python with carefully curated resources, roadmaps, documentation, and learning guides.",
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
