"use client";

import React, { useRef } from "react";
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  SimpleGrid,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

import MenuItem from "@/components/navigation/MenuItem";
import ToggleColorMode from "@/components/navigation/ToggleColorMode";
import { pages, styleConstants } from "@/lib/constants";
import Link from "next/link";

export default function MenuToggle() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconColor = useColorModeValue(styleConstants.iconLightColor, styleConstants.iconDarkColor);

  return (
    <>
      <Stack direction={"row"} spacing={5}>
        <Link href={pages.search}>
          <Button>
            <SearchIcon />
          </Button>
        </Link>
        <ToggleColorMode />
        <Button onClick={onOpen} ref={buttonRef}>
          <HamburgerIcon boxSize={6} />
        </Button>
      </Stack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"full"} finalFocusRef={buttonRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={iconColor} />
          <DrawerBody py={12} px={8}>
            <SimpleGrid columns={1} spacing={3}>
              <MenuItem to={pages.signIn} fontSize={"2xl"} as={"b"} onClick={onClose}>
                Sign in
              </MenuItem>
              <MenuItem to={pages.signUp} fontSize={"2xl"} as={"b"} onClick={onClose}>
                Sign up
              </MenuItem>
              <Divider orientation={"horizontal"} mt={6} mb={4} size={"20px"} />
              <MenuItem to={pages.premium} onClick={onClose}>
                Premium
              </MenuItem>
              <MenuItem to={pages.help} onClick={onClose}>
                Help
              </MenuItem>
              <MenuItem to={pages.download} onClick={onClose}>
                Download
              </MenuItem>
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
