import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVariableVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const title = "emptea — Crank, the iPhone workout tracker";
const description =
  "Crank is a fast iPhone workout tracker. Log sets in seconds, map every muscle, track PRs and streaks, and compare with friends. Made in Switzerland.";

export const metadata: Metadata = {
  metadataBase: new URL("https://emptea.xyz"),
  title: {
    default: title,
    template: "%s · emptea",
  },
  description,
  applicationName: "emptea",
  category: "health & fitness",
  keywords: [
    "Crank",
    "Crank app",
    "emptea",
    "workout tracker",
    "gym tracker app",
    "strength training app",
    "lifting log",
    "workout log iPhone",
    "PR tracker",
    "muscle map",
    "strength standards",
    "workout streak",
    "fitness leaderboard",
    "Apple Health workout app",
    "iPhone apps",
    "made in Switzerland",
  ],
  authors: [{ name: "emptea studios", url: "https://emptea.xyz" }],
  creator: "emptea studios",
  publisher: "emptea studios",
  alternates: { canonical: "/" },
  // iOS Safari shows the Smart App Banner for Crank
  itunes: { appId: "6757124183" },
  openGraph: {
    type: "website",
    url: "https://emptea.xyz",
    siteName: "emptea",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      style={{ scrollBehavior: "smooth" }}
      className={`${geist.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
