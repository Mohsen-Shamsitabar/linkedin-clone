import { ReactQueryProvider } from "@/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "normalize.css";
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
        <ReactQueryProvider>
          <div className="w-full">{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
