import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Berlin Guide für dich",
  description: "Guía interactiva de Berlín para estudiantes mexicanos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50">
        <nav className="bg-gradient-to-r from-green-700 to-red-700 text-white p-4 shadow-lg sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2">
              🇩🇪 Berlin Guide
            </Link>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <Link href="/" className="hover:text-yellow-300 transition font-medium">Inicio</Link>
              <Link href="/lugares" className="hover:text-yellow-300 transition font-medium">Lugares</Link>
              <Link href="/frases" className="hover:text-yellow-300 transition font-medium">Frases</Link>
              <Link href="/mapa" className="hover:text-yellow-300 transition font-medium">Mapa</Link>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-white text-center p-6 mt-10">
          <p className="text-sm">🇲🇽🇩🇪 Berlin Guide - Für mexikanische Studenten</p>
          <p className="text-xs text-gray-400 mt-1">Entdecke die Hauptstadt Deutschlands!</p>
        </footer>
      </body>
    </html>
  );
}