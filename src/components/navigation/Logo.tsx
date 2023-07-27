"use client";

import React from "react";
import { Box, Flex, Image, Show, Text, useColorModeValue } from "@chakra-ui/react";

export default function Logo({ ...props }) {
  return (
    <Box {...props}>
      <Flex
        as={"div"}
        w={"60px"}
        h={"60px"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("", "white")}
        borderRadius={"full"}
        p={1}
      >
        <Image src={"/assets/raccoon64.png"} alt={"Logo"} color={useColorModeValue("black", "white")} />
      </Flex>
      <Show below={"sm"}>
        <Text fontSize={"md"} fontWeight={"bold"} color={useColorModeValue("black", "white")} px={4}>
          Some text
        </Text>
      </Show>
    </Box>
  );
}
