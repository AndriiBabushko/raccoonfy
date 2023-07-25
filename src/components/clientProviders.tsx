"use client";

import React, { ReactNode } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <>
      <CacheProvider>
        <ChakraProvider>
          <ColorModeProvider options={{ initialColorMode: "system", useSystemColorMode: true }} />
          {children}
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
