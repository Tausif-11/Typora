import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/components/auth-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Typora - Collaborative Code Editor',
    template: '%s | Typora',
  },
  description:
    'Real-time collaborative code editor for developers. Google Docs meets VS Code with live collaboration, syntax highlighting, and GitHub integration.',
  keywords: [
    'code editor',
    'collaborative',
    'real-time',
    'programming',
    'development',
    'pair programming',
  ],
  authors: [{ name: 'Tausif Mohammad' }],
  creator: 'Tausif Mohammad',
  publisher: 'Typora',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://typora.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typora.vercel.app',
    title: 'Typora - Collaborative Code Editor',
    description:
      'Real-time collaborative code editor for developers. Google Docs meets VS Code with live collaboration, syntax highlighting, and GitHub integration.',
    siteName: 'Typora',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Typora - Collaborative Code Editor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Typora - Collaborative Code Editor',
    description:
      'Real-time collaborative code editor for developers. Google Docs meets VS Code with live collaboration, syntax highlighting, and GitHub integration.',
    images: ['/og-image.png'],
    creator: '@tausifmohammad',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon_16x16.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon_64x64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon_128x128.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/favicon_256x256.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon_512x512.png"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
