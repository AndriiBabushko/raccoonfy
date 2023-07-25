"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface MenuToggleProps {
  toggleHandler: Function;
  isOpen: boolean;
}

export default function MenuToggle({ toggleHandler, isOpen }: MenuToggleProps) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={() => toggleHandler()}>
      {isOpen ? <HamburgerIcon /> : <HamburgerIcon />}
    </Box>
  );
}
