import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Deep Space Tic-Tac-Toe',
  description: 'Built with Next.js, Tailwind, and stars ✨',
   icons: {
    icon: '/astrofav.ico', 
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-foreground font-spacetron antialiased">
<div className="fixed inset-0 bg-space bg-cover bg-center -z-10" />
        
        {children}
      </body>
    </html>
  )
}


