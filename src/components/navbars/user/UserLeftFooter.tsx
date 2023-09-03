"use client";

import React from "react";
import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { pages, styleConstants } from "@/lib/constants";
import { IPage } from "@/models/IPage";

const userLeftFooterPages: IPage[] = [
  {
    link: "legal" in pages ? (pages.legal as string) : pages.home,
    name: "Legal",
  },
  {
    link: "privacyCenter" in pages ? (pages.privacyCenter as string) : pages.home,
    name: "Privacy Center",
  },
  {
    link: "privacyPolicy" in pages ? (pages.privacyPolicy as string) : pages.home,
    name: "Privacy Policy",
  },
  {
    link: "cookies" in pages ? (pages.cookies as string) : pages.home,
    name: "Cookies",
  },
  {
    link: "aboutAds" in pages ? (pages.aboutAds as string) : pages.home,
    name: "About Ads",
  },
  {
    link: "accessibility" in pages ? (pages.accessibility as string) : pages.home,
    name: "Accessibility",
  },
];

export default function UserLeftFooter() {
  const textLinkColor = useColorModeValue(styleConstants.textLinkLightColor, styleConstants.textLinkDarkColor);
  const buttonBgColor = useColorModeValue(styleConstants.actionsLightBgColor, styleConstants.actionsDarkBgColor);
  const selectedLanguage = "English";
  const changeLanguageHandler = () => {};

  return (
    <Box className={"UserLeftFooter"}>
      <Flex flexDirection={"row"} flexWrap={"wrap"} justifyContent={"space-between"} my={4}>
        {userLeftFooterPages.map((page) => {
          return (
            <Link key={Math.random()} href={page.link}>
              <Text color={textLinkColor} fontSize={"sm"} my={1} mx={2}>
                {page.name}
              </Text>
            </Link>
          );
        })}
      </Flex>
      <Button bgColor={buttonBgColor} mt={4} onClick={changeLanguageHandler}>
        {selectedLanguage}
      </Button>
    </Box>
  );
}
