import type { Metadata } from "next";
import { Kumbh_Sans, Lexend_Deca } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const kumbh_sans = Kumbh_Sans({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kumbh-sans",
  style: ["normal"],
});

const lexend_deca = Lexend_Deca({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lexend-deca",
  style: ["normal"],
});

export const metadata: Metadata = {
  // Los campos antes de openGraph son para el SEO que aparecerá en los motores de búsqueda como Google
  title: "Carlos Trujillo - Portafolio de proyectos",
  description:
    "¡Hola!, estoy encantado de que estés aquí, te presento mi portafolio donde podrás ver mis proyectos y habilidades. Dentro de él encontrarás una variedad de proyectos que abarcan diferentes áreas y desafíos. Te invito a explorar mis proyectos y siéntete libre de contactarme si tienes alguna pregunta o si deseas trabajar conmigo.",
  keywords:
    "My portfolio, portafolio, Next.js, carlostrujillo, desarrollador, developer, frontend, frontend-developer, programador, proyectos, react, portafolio de proyectos, html, css, javascript, portafolio de proyectos, programación, react developer",
  creator: "Carlos Trujillo",
  authors: [{ name: "Carlos Trujillo" }],
  applicationName: "Portafolio de Carlos Trujillo",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Carlos Trujillo - Portafolio de proyectos",
    description:
      "¡Hola!, estoy encantado de que estés aquí, te presento mi portafolio donde podrás ver mis proyectos y habilidades. Dentro de él encontrarás una variedad de proyectos que abarcan diferentes áreas y desafíos. Te invito a explorar mis proyectos y siéntete libre de contactarme si tienes alguna pregunta o si deseas trabajar conmigo.",
    url: "https://carlostrujilloneyra.netlify.app/",
    type: "website",
    locale: "es_ES",
    siteName: "Portafolio de Carlos Trujillo",
    images: [
      {
        url: "https://carlostrujilloneyra.netlify.app/og.jpg",
        width: 2400,
        height: 1260,
        alt: "¡Hola!, te presento mi portafolio donde podrás ver mis proyectos y habilidades.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Trujillo - Portafolio de proyectos",
    description:
      "¡Hola!, te presento mi portafolio donde podrás ver mis proyectos y habilidades.",
    creator: "@Carlos95018928",
    images: ["https://carlostrujilloneyra.netlify.app/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${kumbh_sans.variable} ${lexend_deca.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
