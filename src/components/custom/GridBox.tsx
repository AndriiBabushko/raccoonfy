"use client";

import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface GridBoxProps {
  children: ReactNode;
  bgColor: string;
}

export default function GridBox({ children, bgColor }: GridBoxProps) {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-between"}
      bg={bgColor}
      w={"100%"}
      h={"100%"}
      p={6}
      rounded={10}
    >
      {children}
    </Flex>
  );
}
