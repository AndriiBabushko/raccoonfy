"use client";

import React, { ReactNode } from "react";
import { Box, Center } from "@chakra-ui/react";

import AdminNavbar from "@/components/navbars/AdminNavbar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <AdminNavbar />
      <Center>{children}</Center>
    </>
  );
}
