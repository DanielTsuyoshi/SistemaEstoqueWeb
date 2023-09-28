import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sistema de Estoque',
  description: 'Um app para controle de produtos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right"/>
      </body>
    </html>
  )
}