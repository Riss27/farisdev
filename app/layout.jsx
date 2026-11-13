import "./globals.css";
import { Inter } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://farisfathurrr.vercel.app"),
  title: "Faris Dev | Muhammad Faris Fathur Rohman - Web Developer",
  description: "Portfolio of Muhammad Faris Fathur Rohman — Frontend & Web Developer specializing in Next.js, React, TypeScript, and modern web architectures.",
  authors: [{ name: "Muhammad Faris Fathur Rohman", url: "https://github.com/Riss27" }],
  creator: "Muhammad Faris Fathur Rohman",
  keywords: ["Faris Dev", "Muhammad Faris Fathur Rohman", "Frontend Developer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio"],
  verification: {
    google: "UfrBkzy1SHsYIehKG4EqvKZ2GmuF64N_APGkbUMjtBU",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Faris Dev | Muhammad Faris Fathur Rohman",
    description: "Frontend & Web Developer crafting performant, accessible digital products with modern architectures.",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Faris Fathur Rohman - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faris Dev | Muhammad Faris Fathur Rohman",
    description: "Frontend & Web Developer crafting performant, accessible digital products.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cream text-forest antialiased selection:bg-pink selection:text-white`}>
        <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-forest focus:text-cream focus:px-4 focus:py-2 focus:text-sm">
          Skip to content
        </a>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}