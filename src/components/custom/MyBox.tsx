"use client";

import React, { ReactNode } from "react";
import { Box, FlexProps, useColorModeValue } from "@chakra-ui/react";
import { styleConstants } from "@/lib/constants";

interface GridBoxProps extends FlexProps {
  children: ReactNode;
}

export default function MyBox({ children, w, h, m, mb, p, overflow, overflowX, overflowY, className }: GridBoxProps) {
  const bgColor = useColorModeValue(styleConstants.boxLightColor, styleConstants.boxDarkColor);
  const padding = p ? p : styleConstants.defaultPadding;

  return (
    <Box
      className={"MyBox " + className}
      bgColor={bgColor}
      w={w ? w : "100%"}
      h={h ? h : "100%"}
      m={m}
      mb={mb}
      p={padding}
      rounded={styleConstants.defaultRoundedBoxValue}
      overflow={overflow}
      overflowX={overflowX}
      overflowY={overflowY}
    >
      {children}
    </Box>
  );
}
