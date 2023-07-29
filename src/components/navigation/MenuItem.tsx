"use client";

import React, { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { BoxProps, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface MenuItemProps extends BoxProps {
  to: string;
  children: ReactNode;
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
  ...rest
}: MenuItemProps) {
  const currentPathName = usePathname();
  const textColor = useColorModeValue("gray.800", "grey.200");
  const hoverTextIconColor = useColorModeValue("text-black", "text-white");

  const icon = currentPathName === to ? activeIcon : inactiveIcon;

  return (
    <Flex flexDirection={"row"} align={"center"}>
      <Link href={to} className={"w-full"} onClick={onClickLink}>
        <Flex justify={isExpanded ? "inherit" : "center"} alignItems={"center"} my={2}>
          {icon && (
            <Icon
              as={icon}
              mr={children ? 2 : 0}
              boxSize={iconSize}
              className={`hover:${hoverTextIconColor} transition-colors duration-300 ease-in-out`}
            />
          )}
          {children && (
            <Text
              display={"block"}
              color={textColor}
              px={4}
              {...rest}
              className={`hover:${hoverTextIconColor} transition-colors duration-300 ease-in-out`}
            >
              {children}
            </Text>
          )}
        </Flex>
      </Link>
    </Flex>
  );
}
