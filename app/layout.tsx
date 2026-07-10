import type { Metadata } from "next";
import { IBM_Plex_Sans, Instrument_Serif, Syne } from "next/font/google";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const accentFont = Instrument_Serif({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Marshall Ekene | Senior Full-Stack Developer",
  description:
    "Animated Next.js portfolio for a full-stack developer focused on modern frontend systems, APIs, and scalable product experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${accentFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
