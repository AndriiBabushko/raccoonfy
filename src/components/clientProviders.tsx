"use client";

import React, { ReactNode } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "@/lib/theme";

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <>
      <CacheProvider>
        <ChakraProvider>
          <ColorModeProvider options={theme} />
          {children}
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
