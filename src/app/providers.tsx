"use client";

import ClientProviders from "@/components/clientProviders";
import ServerProviders from "@/app/components/serverProviders";
import React, { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ServerProviders>
      <ClientProviders>{children}</ClientProviders>
    </ServerProviders>
  );
}
