"use client";

import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label={"Color mode"}
      icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      colorScheme={"gray"}
      onClick={toggleColorMode}
    ></IconButton>
  );
}
