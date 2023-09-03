"use client";

import React, { ReactNode } from "react";
import { Center } from "@chakra-ui/react";

import AdminNavbar from "@/components/navbars/admin/AdminNavbar";

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
