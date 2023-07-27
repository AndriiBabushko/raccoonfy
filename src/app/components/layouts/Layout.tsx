"use client";

import React, { ReactNode } from "react";
import UserLayout from "@/app/components/layouts/UserLayout";
import AdminLayout from "@/app/components/layouts/AdminLayout";
import NoAuthLayout from "@/app/components/layouts/NoAuthLayout";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isAuth = false;
  const isUser = false;
  const isAdmin = false;

  if (isAuth && isUser) {
    return <UserLayout>{children}</UserLayout>;
  }

  if (isAuth && isAdmin) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return <NoAuthLayout>{children}</NoAuthLayout>;
}
