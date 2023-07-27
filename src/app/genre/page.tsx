"use client";

import React from "react";
import { Button, Box, Heading, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Genre() {
  return (
    <Box display={"flex"} alignItems={"center"} h={"100vh"} w={"100%"}>
      <SimpleGrid columns={1} spacing={3} mx={4} w={"100%"}>
        <Heading as={"h1"} size={"xl"} color={useColorModeValue("black", "white")}>
          Hi, our small raccoon&lsquo;s, there!
        </Heading>
        <Text as={"p"} color={useColorModeValue("black", "white")}>
          Jump right in by searching for some genre you really love.
        </Text>
        <Button
          leftIcon={<SearchIcon color={useColorModeValue("black", "white")} boxSize={6} />}
          w={"full"}
          variant={"solid"}
        >
          <Text as={"p"} size={"md"} color={useColorModeValue("black", "white")} ml={2}>
            Search
          </Text>
        </Button>
      </SimpleGrid>
    </Box>
  );
}
