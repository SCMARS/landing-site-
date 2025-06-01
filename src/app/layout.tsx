import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Таблетована сіль вищої якості | Водоочищення та водом\'якшення',
  description: 'Таблетована сіль преміум якості для систем водоочищення, промислових котлів та харчових виробництв. Доставка по всій Україні. Чистота 99.8%.',
  keywords: 'таблетована сіль, водоочищення, водом\'якшення, промислові котли, харчові виробництва, Україна',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Таблетована сіль вищої якості',
    description: 'Ідеальне рішення для водоочищення та промислових потреб',
    type: 'website',
    locale: 'uk_UA',
  },
  icons: {
    icon: '/icons/favicon.ico',
    apple: '/icons/icon-192x192.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
