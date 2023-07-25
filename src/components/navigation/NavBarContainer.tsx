"use client";

import React, { ReactNode } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

interface NavBarContainerProps {
  children: ReactNode;
}

export default function NavBarContainer({ children, ...extraStyles }: NavBarContainerProps) {
  return (
    <Flex
      as={"nav"}
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={3}
      bg={useColorModeValue("gray.300", "gray.800")}
      {...extraStyles}
    >
      {children}
    </Flex>
  );
}
