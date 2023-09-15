import '../css/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adrian Tobi',
  description: 'I’m Adrian. A freelance web developer and Next.js enthusiast.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=array@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet" />
      </Head>
      <body>
        {children}
        <Analytics />
      </body>
      {/* className={inter.className} */}
    </html>
  )
}
