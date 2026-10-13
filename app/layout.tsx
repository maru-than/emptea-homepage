import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVariableVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const title = "emptea — The toolkit for a better you";
const description =
  "Crank for strength, FlexMax for flexibility, Rise for a quiet mind. Native iPhone apps, made in Switzerland.";

export const metadata: Metadata = {
  metadataBase: new URL("https://emptea.xyz"),
  title: {
    default: title,
    template: "%s · emptea",
  },
  description,
  applicationName: "emptea",
  keywords: [
    "emptea",
    "Crank",
    "FlexMax",
    "Rise",
    "workout tracker",
    "strength training app",
    "stretching app",
    "flexibility",
    "mindfulness app",
    "meditation",
    "journaling",
    "screen time",
    "iPhone apps",
  ],
  authors: [{ name: "emptea studios" }],
  creator: "emptea studios",
  publisher: "emptea studios",
  alternates: { canonical: "/" },
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
  colorScheme: "dark",
  themeColor: "#0b0b0c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
