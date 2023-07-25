"use client";

import React, { FC, ReactNode } from "react";
import { Box, Center } from "@chakra-ui/react";

import AdminNavbar from "@/components/navbars/AdminNavbar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <Box>
        <AdminNavbar />
        <Center>{children}</Center>
      </Box>
    </>
  );
}
