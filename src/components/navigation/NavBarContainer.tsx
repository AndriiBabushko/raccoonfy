"use client";

import React, { ReactNode } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

interface NavBarContainerProps {
  children: ReactNode;
}

export default function NavBarContainer({ children, ...extraStyles }: NavBarContainerProps) {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex
      as={"nav"}
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={3}
      bg={bgColor}
      borderY={"2px"}
      borderColor={"gray.900"}
      {...extraStyles}
    >
      {children}
    </Flex>
  );
}
