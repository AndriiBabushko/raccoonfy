"use client";

import React, { ReactNode } from "react";
import { NoAuthNavbar } from "@/components/navbars/NoAuthNavbar";
import UserLeftFooter from "@/components/navbars/user/UserLeftFooter";

interface NoAuthLayoutProps {
  children: ReactNode;
}

export default function NoAuthLayout({ children }: NoAuthLayoutProps) {
  return (
    <>
      <NoAuthNavbar />
      {children}
      <UserLeftFooter />
    </>
  );
}
