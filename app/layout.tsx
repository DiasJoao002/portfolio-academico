import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | João Vitor Dias',
    default: 'João Vitor Dias - Desenvolvedor & Tecnólogo',
  },
  description: "Portfólio acadêmico e profissional de João Vitor Dias. Desenvolvedor de Sistemas com foco em Python, React, e Inteligência Artificial.",
  keywords: ["João Vitor Dias", "Desenvolvedor", "ADS", "Python", "React", "Next.js", "Portfólio", "São José dos Campos"],
  authors: [{ name: "João Vitor Dias" }],
  creator: "João Vitor Dias",
  openGraph: {
    title: "João Vitor Dias - Portfólio Acadêmico",
    description: "Conheça meus projetos em tecnologia, IA e desenvolvimento.",
    url: 'https://portfolio-academico-two.vercel.app',
    siteName: 'Portfólio João Vitor Dias',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}