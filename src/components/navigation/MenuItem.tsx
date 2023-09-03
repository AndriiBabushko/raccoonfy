"use client";

import React, { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { Box, BoxProps, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { styleConstants } from "@/lib/constants";

interface MenuItemProps extends BoxProps {
  to: string;
  children?: ReactNode;
  inactiveIcon?: IconType;
  activeIcon?: IconType;
  iconSize?: string | number;
  onClickLink?: MouseEventHandler<any>;
  isExpanded?: boolean;
}

export default function MenuItem({
  children,
  to,
  inactiveIcon = undefined,
  activeIcon = undefined,
  iconSize = 16,
  onClickLink,
  isExpanded,
  mt,
  mb,
  ...rest
}: MenuItemProps) {
  const currentPathName = usePathname();
  const textColor = useColorModeValue(styleConstants.textLightColor, styleConstants.textDarkColor);
  const hoverTextColor = useColorModeValue(styleConstants.hoverTextLightColor, styleConstants.hoverTextDarkColor);
  const hoverTextIconColor = useColorModeValue(styleConstants.hoverTextLightColor, styleConstants.hoverTextDarkColor);
  const boxBgColor = useColorModeValue(styleConstants.actionsLightBgColor, styleConstants.actionsDarkBgColor);
  const hoverBoxBgColor = useColorModeValue(
    styleConstants.defaultLightBgHoverColor,
    styleConstants.defaultDarkBgHoverColor,
  );

  const icon = currentPathName === to ? activeIcon : inactiveIcon;

  return (
    <Box
      bgColor={boxBgColor}
      color={textColor}
      _hover={{ color: hoverTextColor, backgroundColor: hoverBoxBgColor }}
      transition={"color 0.3s ease-in-out, background-color 0.3s ease-in-out"}
      mt={mt}
      mb={mb}
      py={2}
      rounded={styleConstants.boxBorderRadius}
    >
      <Link href={to} className={"w-full"} onClick={onClickLink}>
        <Flex justify={"center"} alignItems={"center"} position={"relative"}>
          {icon && (
            <Icon
              as={icon}
              boxSize={iconSize}
              className={`hover:${hoverTextIconColor} transition-colors duration-300 ease-in-out`}
            />
          )}
          <Text
            px={4}
            {...rest}
            className={`hover:${hoverTextIconColor} ${
              isExpanded ? "relative opacity-100 translate-x-0" : "absolute right-14 opacity-0 translate-x-36"
            } transform transition-all duration-300 ease-in-out`}
            zIndex={0}
          >
            {children}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
}
