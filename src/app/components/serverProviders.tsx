import { ReactNode } from "react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: ReactNode;
}

export default function ServerProviders({ children }: ProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
