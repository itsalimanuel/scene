import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/context";
import Preloader from "@/components/ui/Preloader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0d736d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://scenemedical.ae"),
  title: {
    default: "Scene Medical Supplies — Advanced Spine, Pain & Orthopedic Solutions | Dubai, UAE",
    template: "%s | Scene Medical Supplies",
  },
  description:
    "UAE-based medical equipment distributor specializing in spine surgery, interventional pain management, orthopedics, and minimally invasive technologies. Serving hospitals across Dubai, Abu Dhabi, and the Northern Emirates.",
  keywords: [
    "Scene Medical Supplies",
    "Scene Medical Equipment Trading",
    "medical equipment distributor Dubai",
    "spine surgery UAE",
    "interventional pain management UAE",
    "radiofrequency ablation Dubai",
    "kyphoplasty UAE",
    "orthopedic implants Dubai",
    "PEEK cages UAE",
    "hospital medical supply Dubai",
  ],
  authors: [{ name: "Scene Medical Equipment Trading L.L.C" }],
  creator: "Scene Medical Equipment Trading L.L.C",
  publisher: "Scene Medical Equipment Trading L.L.C",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Scene Medical Supplies — Spine, Pain & Orthopedic Solutions | Dubai, UAE",
    description:
      "Premier distributor of specialized surgical implants, radiofrequency ablation generators, and minimally invasive spine technologies across the UAE.",
    url: "https://scenemedical.ae",
    siteName: "Scene Medical Supplies",
    locale: "en_AE",
    alternateLocale: ["ar_AE"],
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1024,
        height: 168,
        alt: "Scene Medical Supplies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scene Medical Supplies — Dubai, UAE",
    description:
      "Specialized technologies for spine surgery, interventional pain management, and orthopedics supporting UAE healthcare facilities.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-AE": "/",
      "ar-AE": "/",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <body>
        <I18nProvider>
          <Preloader />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
