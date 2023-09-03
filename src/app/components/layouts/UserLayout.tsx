"use client";

import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { styleConstants } from "@/lib/constants";
import UserNavbar from "@/components/navbars/user/UserNavbar";

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <>
      <Flex
        h={"100vh"}
        p={styleConstants.boxMargin}
        transition={"all 0.5s ease-in-out"}
        justifyContent={"space-between"}
      >
        <UserNavbar>{children}</UserNavbar>
      </Flex>
    </>
  );
}
