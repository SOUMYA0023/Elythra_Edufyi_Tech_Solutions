import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#088395",
};

export const metadata: Metadata = {
  title: {
    default: "Elythra Edufyi Tech Solutions — Learn Skills. Get Placed.",
    template: "%s — Elythra Edufyi Tech Solutions",
  },
  description: siteConfig.description,
  keywords: [
    "ed-tech",
    "courses",
    "internship",
    "placement",
    "technical courses",
    "skill development",
    "Elythra Edufyi",
    "career training",
    "online courses India",
    "full stack development",
    "data science",
    "AI ML",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Elythra Edufyi Tech Solutions — Learn Skills. Get Placed.",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-text-primary font-body">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieBanner />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
