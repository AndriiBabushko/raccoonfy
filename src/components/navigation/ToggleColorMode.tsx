"use client";

import React from "react";
import { Button, Stack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Button onClick={toggleColorMode}>{colorMode === "dark" ? <MoonIcon /> : <SunIcon />}</Button>;
}
