"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { BoxProps, Text, useColorModeValue } from "@chakra-ui/react";

interface MenuItemProps extends BoxProps {
  to: string;
  children: ReactNode;
}

export default function MenuItem({ children, to, ...rest }: MenuItemProps) {
  return (
    <Link href={to}>
      <Text
        display={"block"}
        color={useColorModeValue("black", "white")}
        px={4}
        {...rest}
        className={"hover:underline"}
      >
        {children}
      </Text>
    </Link>
  );
}
