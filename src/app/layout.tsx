import type { Metadata } from 'next'
import { Kumbh_Sans, Lexend_Deca } from 'next/font/google'
import './globals.css'

const kumbh_sans = Kumbh_Sans({
  weight: ['600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-kumbh-sans',
  style: ['normal']
}
);

const lexend_deca = Lexend_Deca({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-lexend-deca',
  style: ['normal']
});

export const metadata: Metadata = {
  // Los campos antes de openGraph son para el SEO que aparecerá en los motores de búsqueda como Google
  title: 'Carlos Trujillo - Portafolio de proyectos',
  description: '¡Hola!, te presento mi portafolio donde podrás ver mis proyectos y habilidades.',
  keywords: 'My portfolio, portafolio, Next.js, carlostrujillo, desarrollador, developer, frontend, frontend-developer, programador, proyectos, react',
  creator: 'Carlos Trujillo',
  applicationName: 'Portafolio de Carlos Trujillo',
  icons: {
    icon: [
      '/favicon.ico',
    ],
    apple: [
      '/apple-touch-icon.png',
    ],
    shortcut: [
      '/apple-touch-icon.png',
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Carlos Trujillo - Portafolio de proyectos',
    description: '¡Hola!, te presento mi portafolio donde podrás ver mis proyectos y habilidades.',
    url: 'https://carlostrujilloneyra.netlify.app/',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Carlos Trujillo - Portafolio de proyectos',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
      }
    ]
  }
  // openGraph: {
  //   type: 'website',
  //   locale: 'es_ES',
  //   url: 'https://carlostrujillo.vercel.app/',
  //   title: 'Carlos Trujillo - Portafolio de proyectos',
  //   description: '¡Hola!, te presento mi portafolio donde podrás ver mis proyectos y habilidades.',
  //   siteName: 'Carlos Trujillo - Desarrollador de Software'
  // }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${kumbh_sans.variable} ${lexend_deca.variable}`}>{children}</body>
    </html>
  )
}
