import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./header";
import { Footer } from "./footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// static fields used in multiple locations in the metadata
const TITLE = "W. Notepad"
const DESC = "The Gym Notebook Replacement. Download Today."
const BASE_URL = "https://workoutnotepad.co"

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: {
    template: "%s",
    default: TITLE
  },
  description: DESC,
  generator: 'Next.js',
  applicationName: 'Sapphire NW Site',
  referrer: 'origin-when-cross-origin',
  keywords: ["Workouts", "Fitness", "Exercise", "App", "Mobile App", "Tracking", "Fitness Tracking", "Workout Tracking", "Workout Notebook App", "Workout Notepad", "Workout Logging App", "Exercise Tracking App", "Workout Tracking App"],
  authors: [
    {
      name: "Jake Landers",
      url: "https://jakelanders.com"
    },
    {
      name: "Kevin Landers",
    },
  ],
  creator: 'Jake Landers',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: BASE_URL,
    siteName: TITLE,
    images: [
      {
        url: "/favicon.ico",
        height: 256,
        width: 256,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: TITLE,
  //   description: DESC,
  //   siteId: 'GMq2t4Zb39BbuOJpVPE8rfrfurEsuiDq',
  //   creator: '@sapphirenw',
  //   creatorId: 'GMq2t4Zb39BbuOJpVPE8rfrfurEsuiDq',
  //   images: ['/favicon.ico'],
  // },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    // other: {
    //   me: ['my-email', 'my-link'],
    // },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" suppressHydrationWarning>
    <head />
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <main className="w-full h-full min-h-screen flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </main>
    </body>
  </html>
}
