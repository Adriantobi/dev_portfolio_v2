import '../css/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adrian Tobi',
  description: 'I’m Adrian. A freelance web developer and Next.js enthusiast.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
      {/* className={inter.className} */}
    </html>
  )
}
