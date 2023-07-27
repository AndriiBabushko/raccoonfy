"use client";

import React, { ReactNode } from "react";
import { NoAuthNavbar } from "@/components/navbars/NoAuthNavbar";
import Footer from "@/components/navbars/Footer";

interface NoAuthLayoutProps {
  children: ReactNode;
}

export default function NoAuthLayout({ children }: NoAuthLayoutProps) {
  return (
    <>
      <NoAuthNavbar />
      {children}
      <Footer />
    </>
  );
}
