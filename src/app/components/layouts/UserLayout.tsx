import { FC, ReactNode } from "react";

import { UserNavbar } from "@/components/navbar/UserNavbar";

interface UserLayoutProps {
  children: ReactNode | ReactNode[];
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <>
      <UserNavbar />
      {children}
    </>
  );
}
