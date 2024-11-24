import type { Metadata } from "next";
import localFont from "next/font/local";
import "normalize.css";
import { Footer, Header } from "./(not-logged)";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Linkedin Clone",
  description: "Clone of linkedin.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen overflow-x-hidden`}
      >
        <Header />

        <main className="w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
