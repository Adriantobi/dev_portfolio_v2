import '../css/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

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
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400&display=swap" rel="stylesheet" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
