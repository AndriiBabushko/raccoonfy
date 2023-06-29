import { FC, ReactNode } from 'react';
import { AdminNavbar } from '@/components/client/navbar/AdminNavbar';

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout: FC<AdminLayoutProps> = ({children}) => {
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
}
