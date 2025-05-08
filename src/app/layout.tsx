import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Таблетована сіль | Преміум якість',
  description: 'Відкрийте для себе унікальний смак та корисні властивості натуральної таблетованої солі. 100% натуральні компоненти без штучних домішок.',
  keywords: 'таблетована сіль, сіль для водоочищення, пом\'якшення води, преміум сіль',
  openGraph: {
    title: 'Таблетована сіль | Преміум якість',
    description: 'Відкрийте для себе унікальний смак та корисні властивості натуральної таблетованої солі',
    images: ['/images/Hero.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
