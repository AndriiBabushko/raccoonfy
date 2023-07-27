"use client";

import React, { useState } from "react";

import NavBarContainer from "@/components/navigation/NavBarContainer";
import Logo from "@/components/navigation/Logo";
import ToggleColorMode from "@/components/navigation/ToggleColorMode";
import MenuToggle from "@/components/navigation/MenuToggle";

export const NoAuthNavbar = ({ ...props }) => {
  return (
    <NavBarContainer {...props}>
      <Logo w={"100px"} />
      <MenuToggle />
    </NavBarContainer>
  );
};
