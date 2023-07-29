"use client";

import React, { ReactNode } from "react";
import UserLayout from "@/app/components/layouts/UserLayout";
import AdminLayout from "@/app/components/layouts/AdminLayout";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isAuth = false;
  const isAdmin = false;

  if (isAuth && isAdmin) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return <UserLayout>{children}</UserLayout>;
}
