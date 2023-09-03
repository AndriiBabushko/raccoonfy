"use client";

import React from "react";
import MenuItem from "@/components/navigation/MenuItem";
import { pages, styleConstants } from "@/lib/constants";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { RiSearchFill, RiSearchLine } from "react-icons/ri";
import { Stack } from "@chakra-ui/react";

interface LeftTopNavbarProps {
  iconSize: number;
  isExpanded: boolean;
}

export default function UserLeftTopNavbar({ iconSize, isExpanded }: LeftTopNavbarProps) {
  return (
    <Stack spacing={styleConstants.defaultPadding} flexDirection={"column"}>
      <MenuItem
        to={pages.root}
        inactiveIcon={AiOutlineHome}
        activeIcon={AiFillHome}
        iconSize={iconSize}
        isExpanded={isExpanded}
        fontWeight={600}
      >
        Home
      </MenuItem>
      <MenuItem
        to={pages.search}
        inactiveIcon={RiSearchLine}
        activeIcon={RiSearchFill}
        iconSize={iconSize}
        isExpanded={isExpanded}
        fontWeight={600}
      >
        Search
      </MenuItem>
    </Stack>
  );
}
