import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Le Coq Athlétique - Clément Barillot | Préparateur Physique et Mental',
  description: 'Clément Barillot, Préparateur Physique et Mental. Ton potentiel est un point de départ, la performance est une destination que nous atteindrons ensemble.',
  keywords: 'préparation physique, préparation mentale, coach sportif, Clément Barillot, Oyonnax, performance sportive, entraînement personnalisé',
  openGraph: {
    title: 'Le Coq Athlétique - Clément Barillot',
    description: 'Préparateur Physique et Mental - Ton parcours vers l\'excellence',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
