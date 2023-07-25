"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";

interface MenuItemProps {
  to: string;
  children: ReactNode;
}

export default function MenuItem({ to, children, ...rest }: MenuItemProps) {
  return (
    <Link href={to}>
      <Text display={"block"} color={useColorModeValue("black", "white")} px={4} {...rest}>
        {children}
      </Text>
    </Link>
  );
}
