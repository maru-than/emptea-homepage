import type { Metadata, Viewport } from "next";
import { EB_Garamond, Geist } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emptea.xyz"),
  title: "emptea studios",
  description: "Emptea studios, a powerhouse. Curious & industrial.",
  openGraph: {
    title: "emptea studios",
    description: "Emptea studios, a powerhouse. Curious & industrial.",
    type: "website",
    url: "https://emptea.xyz",
    siteName: "emptea studios",
  },
  twitter: {
    card: "summary_large_image",
    title: "emptea studios",
    description: "Emptea studios, a powerhouse. Curious & industrial.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#e7e5e4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ebGaramond.variable} ${geist.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
