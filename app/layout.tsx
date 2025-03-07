import type { Metadata } from "next";
import "./globals.css";
import { Libre_Baskerville } from 'next/font/google'

const baskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-baskerville',
})

export const metadata: Metadata = {
  title: "Be Here Now - Live Book Event",
  description: "Live Book Event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baskerville.variable} font-baskerville antialiased`}>
        {children}
      </body>
    </html>
  );
}
