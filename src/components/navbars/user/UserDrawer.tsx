"use client";

import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { styleConstants } from "@/lib/constants";

export default function UserDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerBtnRef = useRef(null);

  return (
    <>
      <IconButton
        icon={<RxHamburgerMenu fontSize={styleConstants.defaultIconSize} />}
        aria-label={"Hamburger"}
        onClick={onOpen}
        display={{ base: "flex", lg: "none" }}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement={"left"} finalFocusRef={drawerBtnRef} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody></DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
