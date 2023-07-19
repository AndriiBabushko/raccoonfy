import { FC, ReactNode } from "react";
import { AdminNavbar } from "@/components/navbar/AdminNavbar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
}
