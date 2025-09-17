import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GreenSuite',
  description: 'Streamline your workflow with our eco-friendly SaaS platform.',
  keywords: ['saas', 'software', 'productivity', 'collaboration', 'green'],
  openGraph: {
    title: 'GreenSuite',
    description: 'Streamline your workflow with our eco-friendly SaaS platform.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}