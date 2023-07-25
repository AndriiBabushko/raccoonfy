"use client";

import React, { FC, ReactNode } from "react";
import { Box, Center, useColorModeValue } from "@chakra-ui/react";

import { UserNavbar } from "@/components/navbars/UserNavbar";

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <>
      <Box as={"div"} h={"100%"} bgColor={useColorModeValue("gray.300", "gray.800")}>
        <UserNavbar />
        {children}
      </Box>
    </>
  );
}
