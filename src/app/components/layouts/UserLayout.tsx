"use client";

import React, { ReactNode, useState } from "react";
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { LuLibrary } from "react-icons/lu";
import { RiSearchFill, RiSearchLine } from "react-icons/ri";

import MenuItem from "@/components/navigation/MenuItem";
import GridBox from "@/components/custom/GridBox";
import { pages } from "@/lib/constants";

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const setExpandedHandler = () => {
    setIsExpanded(!isExpanded);
  };

  const bgColor = useColorModeValue("gray.100", "gray.900");
  const iconSize = 35;

  return (
    <>
      <Grid
        templateAreas={`"navLeftTop navLeftBot" "navTop" "main"`}
        templateColumns={"repeat(12, 1fr)"}
        templateRows={"repeat(6, 1fr)"}
        gap={3}
        m={3}
      >
        <GridItem gridArea={`1/1/3/${isExpanded ? "4" : "2"}`}>
          <GridBox bgColor={bgColor}>
            <MenuItem
              to={pages.root}
              inactiveIcon={AiOutlineHome}
              activeIcon={AiFillHome}
              iconSize={iconSize}
              isExpanded={isExpanded}
              fontWeight={600}
            >
              {isExpanded && "Home"}
            </MenuItem>
            <MenuItem
              to={pages.search}
              inactiveIcon={RiSearchLine}
              activeIcon={RiSearchFill}
              iconSize={iconSize}
              isExpanded={isExpanded}
              fontWeight={600}
            >
              {isExpanded && "Search"}
            </MenuItem>
          </GridBox>
        </GridItem>
        <GridItem gridArea={`3/1/7/${isExpanded ? "4" : "2"}`}>
          <GridBox bgColor={bgColor}>
            <MenuItem
              to={pages.library}
              inactiveIcon={LuLibrary}
              activeIcon={LuLibrary}
              iconSize={iconSize}
              onClickLink={setExpandedHandler}
              isExpanded={isExpanded}
              fontWeight={500}
            >
              {isExpanded && "Library"}
            </MenuItem>
          </GridBox>
        </GridItem>
        <GridItem gridArea={`1/${isExpanded ? "4" : "2"}/7/13`}>{children}</GridItem>
      </Grid>
    </>
  );
}
