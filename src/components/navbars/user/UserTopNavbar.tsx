"use client";

import React from "react";
import { Button, Divider, Flex, IconButton, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { pages, styleConstants } from "@/lib/constants";
import UserDrawer from "@/components/navbars/user/UserDrawer";
import { IPage } from "@/models/IPage";

const userTopNavbarPages: IPage[] = [
  {
    link: "premium" in pages ? (pages.premium as string) : pages.home,
    name: "Premium",
  },
  {
    link: "support" in pages ? (pages.support as string) : pages.home,
    name: "Support",
  },
  {
    link: "download" in pages ? (pages.download as string) : pages.home,
    name: "Download",
  },
];

export default function UserTopNavbar() {
  const navbarBgColor = useColorModeValue(styleConstants.boxLightColor, "black");
  const iconColor = useColorModeValue(styleConstants.iconLightColor, styleConstants.iconDarkColor);
  const iconBtnBgColor = useColorModeValue(styleConstants.actionsLightBgColor, styleConstants.actionsDarkBgColor);
  const linkColor = useColorModeValue(styleConstants.textLinkLightColor, styleConstants.textLinkDarkColor);
  const linkHoverColor = useColorModeValue(
    styleConstants.textLinkLightHoverColor,
    styleConstants.textLinkDarkHoverColor,
  );
  const buttonTextColor = useColorModeValue(styleConstants.textDarkColor, styleConstants.textLightColor);
  const buttonHoverTextColor = useColorModeValue(styleConstants.hoverTextDarkColor, styleConstants.hoverTextLightColor);
  const buttonBgColor = useColorModeValue(styleConstants.actionsDarkBgColor, styleConstants.actionsLightBgColor);
  const buttonHoverBgColor = useColorModeValue(
    styleConstants.defaultDarkBgHoverColor,
    styleConstants.defaultLightBgHoverColor,
  );

  const goBackHandler = () => {};
  const goForwardHandler = () => {};

  return (
    <Flex
      className={"UserTopNavbar"}
      flexDirection={"row"}
      position={"sticky"}
      bgColor={`rgba(${navbarBgColor}, 0.5)`}
      mb={styleConstants.defaultPadding}
    >
      <Stack spacing={2} direction={"row"}>
        <UserDrawer />
        <IconButton
          bgColor={iconBtnBgColor}
          rounded={"3xl"}
          aria-label={"Go back"}
          icon={<AiOutlineArrowLeft fontSize={styleConstants.defaultIconSize} color={iconColor} />}
          onClick={goBackHandler}
          ml={0}
        />
        <IconButton
          bgColor={iconBtnBgColor}
          rounded={"3xl"}
          aria-label={"Go forward"}
          icon={<AiOutlineArrowRight fontSize={styleConstants.defaultIconSize} color={iconColor} />}
          onClick={goForwardHandler}
        />
      </Stack>
      <Stack spacing={3} w={"100%"} direction={"row"} justifyContent={"flex-end"} alignItems={"center"}>
        {userTopNavbarPages.map((page) => {
          return (
            <Link key={Math.random()} href={page.link}>
              <Text
                fontSize={18}
                color={linkColor}
                fontWeight={600}
                _hover={{ color: linkHoverColor }}
                transition={"color 0.3s ease-in-out"}
              >
                {page.name}
              </Text>
            </Link>
          );
        })}
        <Divider variant={"solid"} orientation={"vertical"} borderColor={linkColor} mx={4} />
        <Link href={pages.signUp}>
          <Text
            fontSize={16}
            color={linkColor}
            fontWeight={600}
            _hover={{ color: linkHoverColor }}
            transition={"color 0.3s ease-in-out"}
          >
            Sign up
          </Text>
        </Link>
        <Link href={pages.signUp}>
          <Button
            rounded={"3xl"}
            bgColor={buttonBgColor}
            color={buttonTextColor}
            _hover={{ backgroundColor: buttonHoverBgColor, color: buttonHoverTextColor }}
          >
            Sign in
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
}
