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
