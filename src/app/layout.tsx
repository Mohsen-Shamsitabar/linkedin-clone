import type { LayoutPageProps } from "@/types";
import type { Metadata } from "next";
import "normalize.css";
import "./globals.css";
import { cn } from "@/utility";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: "Linkedin Clone",
  description: "Clone of linkedin.com",
};

export default function RootLayout(props: LayoutPageProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased w-screen overflow-x-hidden",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
