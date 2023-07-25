import "./globals.css";
import "../styles/scrollbar.scss";
import React, { ReactNode } from "react";
import { Inter } from "next/font/google";

import Providers from "./providers";
import UserLayout from "@/app/components/layouts/UserLayout";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Raccoonfy",
  description: "The best raccoons' music web application",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <UserLayout>{props.children}</UserLayout>
        </Providers>
      </body>
    </html>
  );
}
