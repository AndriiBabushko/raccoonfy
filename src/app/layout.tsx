import "./globals.css";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";

import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raccoonfy",
  description: "The best raccoons' music web application",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
