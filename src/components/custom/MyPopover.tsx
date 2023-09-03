"use client";

import React, { ReactNode } from "react";
import {
  Button,
  PlacementWithLogical,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";

interface MyPopoverProps {
  triggerButtonText: string;
  headerText: string;
  children: ReactNode;
  footerChildren?: ReactNode;
  placement?: PlacementWithLogical;
  closeOnBlur?: boolean;
  arrowBG?: string;
}

export default function MyPopover({
  triggerButtonText,
  headerText,
  children,
  placement,
  closeOnBlur,
  arrowBG,
  footerChildren,
}: MyPopoverProps) {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} placement={placement} closeOnBlur={closeOnBlur}>
      <PopoverTrigger>
        <Button>{triggerButtonText}</Button>
      </PopoverTrigger>
      <PopoverContent p={5}>
        {headerText && (
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            {headerText}
          </PopoverHeader>
        )}
        <PopoverArrow bg={arrowBG} /> <PopoverCloseButton />
        <PopoverBody>{children}</PopoverBody>
        {footerChildren && <PopoverFooter>{footerChildren}</PopoverFooter>}
      </PopoverContent>
    </Popover>
  );
}
