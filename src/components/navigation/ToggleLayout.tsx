"use client";

import React from "react";
import { Button, Stack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ToggleLayout() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack direction={"row"} spacing={7}>
      <Button onClick={toggleColorMode}>{colorMode === "dark" ? <MoonIcon /> : <SunIcon />}</Button>
    </Stack>
  );
}
