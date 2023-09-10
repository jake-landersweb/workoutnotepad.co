import Header from '@/components/header'
import './globals.css'
import { Providers } from "./providers";
import { Metadata } from 'next';

const TITLE = "Workout Notepad"
const DESCRIPTION = "The Gym Notebook Replacement. Download Today."
const URL = "https://workoutnotepad.co"
const IMAGE = "https://workoutnotepad.co/android-chrome-512x512.png"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "Workouts, Fitness, Exercise, App, Mobile App, Tracking, Fitness Tracking, Workout Tracking, Workout Notebook App, Workout Notepad, Workout Logging App, Exercise Tracking App, Workout Tracking App",
  authors: [{ name: 'Jake', url: 'https://sapphirenw.com' }],
  colorScheme: 'light',
  creator: "Jake Landers",
  themeColor: "#418a2f",
  publisher: "Sapphire NW",
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Workout Notepad",
    images: [
      {
        url: IMAGE,
        width: 256,
        height: 256,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    site: "https://workoutnotepad.co",
    images: [IMAGE],
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
  itunes: {
    appId: '6453561144',
  },
  appleWebApp: {
    title: TITLE,
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/apple-touch-icon.png',
    ],
  },
  appLinks: {
    ios: {
      url: 'https://workoutnotepad.co',
      app_store_id: '6453561144',
    },
    android: {
      package: 'com.landersweb.workout_notepad_v2',
      app_name: 'Workout Notepad',
    },
    web: {
      url: 'https://workoutnotepad.co',
      should_fallback: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light bg-bg text-txt'>
      <body>
        <Providers>
          <header className='wn fixed bottom-0 z-50'><Header /></header>
          <div className="pb-[200px] pt-4">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
