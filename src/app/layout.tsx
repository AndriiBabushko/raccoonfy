import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Providers } from "@/app/providers";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raccoonfy",
  description: "The best raccoons' music web application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Providers>{children}</Providers>
    </body>
    </html>
  );
}
