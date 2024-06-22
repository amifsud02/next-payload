import React from 'react'
import "../../lib/assets/scss/main.scss"
import { Red_Hat_Display } from 'next/font/google'

export const metadata = {
  title: 'Payload Custom Server',
  description: 'Serve Payload alongside any front-end framework.',
}

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body className={redHatDisplay.className}>
        {children}
      </body>
    </html>
  )
}
