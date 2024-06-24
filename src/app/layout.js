import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PaintCraft',
  description: 'Aditya Birla Paints',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link
          rel="icon"
          type="image/x-icon" href="favicon.ico?v=2" 
          sizes="any"
        />
        <Analytics />
      </head>
      
      <body>
   {children}
    </body>
    </html>
  )
}
