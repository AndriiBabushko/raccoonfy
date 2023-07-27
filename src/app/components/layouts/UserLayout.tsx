"use client";

import React, { ReactNode } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const isExpanded = false;

  return (
    <>
      <Grid
        templateAreas={`"navLeftTop navLeftBot" "navTop" "main"`}
        templateColumns={"repeat(12, 1fr)"}
        templateRows={"repeat(6, 1fr)"}
        gap={5}
      >
        <GridItem gridArea={`1/1/3/${isExpanded ? "4" : "2"}`}>navLeftTop</GridItem>
        <GridItem gridArea={`3/1/7/${isExpanded ? "4" : "2"}`}>navLeftBot</GridItem>
        <GridItem gridArea={`1/${isExpanded ? "4" : "2"}/7/13`}>{children}</GridItem>
      </Grid>
    </>
  );
}
