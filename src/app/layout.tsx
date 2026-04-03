import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "INTERIKA | Arquitectura · Interiorismo · Construcción",
  description: "Firma de arquitectura de diseño minimalista y gestión en tiempo real.",
  icons: {
    icon: '/interika-brand.png',//
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
