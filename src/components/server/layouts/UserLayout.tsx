import { FC, ReactNode } from 'react';

import { UserNavbar } from '@/components/client/navbar/UserNavbar';

interface UserLayoutProps {
  children: ReactNode|ReactNode[];
}

export const UserLayout: FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      <UserNavbar />
      {children}
    </>
  );
}
