"use client";

import React, { useState } from "react";

import NavBarContainer from "@/components/navigation/NavBarContainer";
import Logo from "@/components/navigation/Logo";
import MenuLinks from "@/components/navigation/MenuLinks";
import ToggleLayout from "@/components/navigation/ToggleLayout";
import MenuToggle from "@/components/navigation/MenuToggle";

export const UserNavbar = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo w={"100px"} />
      <MenuLinks isOpen={isOpen} />
      <ToggleLayout />
      <MenuToggle toggleHandler={toggleNavBar} isOpen />
    </NavBarContainer>
  );
};
