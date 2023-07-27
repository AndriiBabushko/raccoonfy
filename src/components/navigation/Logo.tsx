"use client";

import React from "react";
import { Flex, FlexProps, Image, Show, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";

interface LogoProps extends FlexProps {}

export default function Logo({ ...props }: LogoProps) {
  const alignMd = useBreakpointValue({ base: "center", md: "initial" });

  return (
    <Flex direction={"column"} align={alignMd} {...props}>
      <Flex
        as={"div"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("", "white")}
        borderRadius={"full"}
        p={1}
        w={"60px"}
        h={"60px"}
      >
        <Image src={"/assets/raccoon64.png"} alt={"Logo"} color={useColorModeValue("black", "white")} />
      </Flex>
      <Show below={"md"}>
        <Text fontSize={"md"} fontWeight={"bold"} color={useColorModeValue("black", "white")} py={1}>
          Raccoonfy
        </Text>
      </Show>
    </Flex>
  );
}
