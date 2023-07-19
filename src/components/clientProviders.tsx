"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ClientProvidersProps {
  children: ReactNode | ReactNode[];
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
}
