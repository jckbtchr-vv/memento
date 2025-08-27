import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Memento - Digital Time Capsule for Families',
  description: 'Create lasting memories and messages for your children to discover in the future',
  keywords: ['family', 'memories', 'time capsule', 'parenting', 'notes'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-memento-50 to-memento-100">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
