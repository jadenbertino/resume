import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const sourceSans = Source_Sans_3()

export const metadata: Metadata = {
  title: 'Jaden Bertino',
  icons: {
    icon: `data:image/svg+xml,
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="32">
        📄
      </text>
    </svg>`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <Script
          src='https://kit.fontawesome.com/ba6fc831d0.js'
          crossOrigin='anonymous'
        />
      </head>
      <body className={`${sourceSans.className} antialiased`}>{children}</body>
    </html>
  )
}
