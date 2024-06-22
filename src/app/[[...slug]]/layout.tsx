import React from 'react'
import '../app.scss'

import classes from './layout.module.scss'

export const metadata = {
  title: 'Payload Custom Server',
  description: 'Serve Payload alongside any front-end framework.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={classes.body}>
        {children}
      </body>
    </html>
  )
}
