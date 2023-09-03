"use client";

import React, { ReactNode, useState } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import MyBox from "@/components/custom/MyBox";
import UserLeftTopNavbar from "@/components/navbars/user/UserLeftTopNavbar";
import UserLeftNavbar from "@/components/navbars/user/UserLeftNavbar";
import { styleConstants } from "@/lib/constants";
import UserLeftFooter from "@/components/navbars/user/UserLeftFooter";
import UserTopNavbar from "@/components/navbars/user/UserTopNavbar";

interface UserNavbarProps {
  children: ReactNode;
}

export default function UserNavbar({ children }: UserNavbarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const setExpandedHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Flex
        flexDirection={"column"}
        transition={"width 0.3s ease-in-out"}
        w={isExpanded ? `${styleConstants.expandedLeftNavBox}%` : `${styleConstants.collapsedLeftNavBox}%`}
        mr={styleConstants.boxMargin}
        display={{ base: "none", lg: "flex" }}
        overflow={"hidden"}
      >
        <MyBox h={"fit-content"} mb={styleConstants.boxMargin}>
          <UserLeftTopNavbar iconSize={styleConstants.navIconSize} isExpanded={isExpanded} />
        </MyBox>
        <MyBox className={"boxScrollbar"} overflowY={"scroll"} overflowX={"hidden"}>
          <Stack spacing={2} flexDirection={"column"}>
            <UserLeftNavbar
              iconSize={styleConstants.navIconSize}
              isExpanded={isExpanded}
              setExpandedHandler={setExpandedHandler}
            />
            <UserLeftFooter />
          </Stack>
        </MyBox>
      </Flex>
      <Flex flexDirection={"column"} transition={"width 0.3s ease-in-out"} w={"100%"} position={"relative"}>
        <MyBox className={"boxScrollbar"} overflowY={"scroll"} overflowX={"hidden"}>
          <UserTopNavbar />
          <Box className={"Content"}>{children}</Box>
        </MyBox>
      </Flex>
    </>
  );
}
