"use client";

import React, { MouseEventHandler } from "react";
import MenuItem from "@/components/navigation/MenuItem";
import { pages, styleConstants } from "@/lib/constants";
import { LuLibrary } from "react-icons/lu";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
import ToggleColorMode from "@/components/navigation/ToggleColorMode";
import Link from "next/link";

interface LeftNavbarProps {
  iconSize?: string | number;
  isExpanded?: boolean;
  setExpandedHandler: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function UserLeftNavbar({ iconSize, isExpanded, setExpandedHandler }: LeftNavbarProps) {
  const actionsBgColor = useColorModeValue(styleConstants.actionsLightBgColor, styleConstants.actionsDarkBgColor);
  const popoverBgColor = useColorModeValue(styleConstants.popoverLightBgColor, styleConstants.popoverDarkBgColor);
  const popoverTextColor = useColorModeValue(styleConstants.textLightColor, styleConstants.textDarkColor);
  const popoverBorderColor = useColorModeValue(styleConstants.boxBorderLightColor, styleConstants.boxBorderDarkColor);

  return (
    <Stack spacing={styleConstants.defaultPadding} flexDirection={"column"} className={"UserLeftNavbar"}>
      <Flex
        flexDirection={"row"}
        wrap={"wrap"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100%"}
        p={styleConstants.defaultPadding}
        bgColor={actionsBgColor}
        rounded={styleConstants.boxBorderRadius}
      >
        <ToggleColorMode />
        <IconButton
          aria-label={isExpanded ? "Minimize" : "Maximize"}
          icon={
            <SmallAddIcon
              boxSize={iconSize}
              className={`transition-transform duration-500 ease-in-out transform ${
                isExpanded ? "rotate-45" : "rotate-0"
              }`}
            />
          }
          onClick={setExpandedHandler}
        />
      </Flex>
      <MenuItem
        to={pages.library}
        inactiveIcon={LuLibrary}
        activeIcon={LuLibrary}
        iconSize={iconSize}
        isExpanded={isExpanded}
        fontWeight={500}
      >
        Library
      </MenuItem>
      <Card rounded={styleConstants.boxBorderRadius}>
        <CardHeader>
          <Heading size={"md"}>Create your first playlist</Heading>
        </CardHeader>
        <CardBody py={1}>
          <Text>It&apos;s easy, we&apos;ll help you</Text>
        </CardBody>
        <CardFooter>
          <Popover placement={"right-start"} closeOnBlur={false} autoFocus={false} arrowSize={8} gutter={12}>
            <PopoverTrigger>
              <Button>Create playlist</Button>
            </PopoverTrigger>
            <PopoverContent
              rounded={styleConstants.defaultRoundedBoxValue}
              color={popoverTextColor}
              bgColor={popoverBgColor}
              borderColor={popoverBorderColor}
              borderWidth={3}
            >
              <PopoverHeader pt={4} fontWeight={"bold"} border={0}>
                Create a playlist
              </PopoverHeader>
              <PopoverArrow bg={popoverTextColor} />
              <PopoverCloseButton />
              <PopoverBody>Log in to create and share playlists.</PopoverBody>
              <PopoverFooter border={"0"} display={"flex"} alignItems={"center"} justifyContent={"end"} pb={4}>
                <ButtonGroup size={"sm"}>
                  <Button>Not now</Button>
                  <Button bgColor={actionsBgColor}>Log in</Button>
                </ButtonGroup>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </CardFooter>
      </Card>
      <Card rounded={styleConstants.boxBorderRadius}>
        <CardHeader>
          <Heading size={"md"}>Let&apos;s find some podcasts to follow</Heading>
        </CardHeader>
        <CardBody py={1}>
          <Text>We&apos;ll keep you updated on new episodes</Text>
        </CardBody>
        <CardFooter>
          <Link href={pages.podcasts}>
            <Button>Browse podcasts</Button>
          </Link>
        </CardFooter>
      </Card>
    </Stack>
  );
}
