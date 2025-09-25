import type { Metadata } from "next";
import { Questrial, Parisienne } from "next/font/google";
import "./globals.css";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});
const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-parisienne",
});

export const metadata: Metadata = {
  title: "Chá da Olívia",
  description: "Venha participar do chá da Olívia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="color-scheme" content="light"/>
        <meta name="theme-color" content="#fefefe"/>
        <title>Chá da Olívia 🎉</title>
        <meta property="og:title" content="Chá da Olívia 🎉" />
        <meta property="og:description" content="Venha comemorar a chegada da nossa princesinha!" />
        <meta property="og:image" content="https://cha-baby-olivia.vercel.app/preview.jpg" />
        <meta property="og:url" content="https://cha-baby-olivia.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chá da Olívia 🎉" />
        <meta name="twitter:description" content="Venha comemorar a chegada da nossa princesinha!" />
        <meta name="twitter:image" content="https://cha-baby-olivia.vercel.app/preview.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link
        rel="preload"
        href="/FundoLogoInicial.png"
        as="image"
        type="image/webp"
        fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
