import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interactive Presentation',
  description: 'An interactive presentation with custom cursor and slide animations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden">{children}</body>
    </html>
  )
}
