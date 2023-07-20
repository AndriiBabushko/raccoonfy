"use client";

import React, { FormEventHandler, MouseEventHandler } from "react";
import Link from "next/link";

interface MyLinkProps {
  linkText: string;
  href: string;
  className: string;
  linkType: "button" | "reset" | "submit";
  onClickEvent?: MouseEventHandler<HTMLButtonElement>;
  onSubmitEvent?: FormEventHandler<HTMLButtonElement>;
  linkId?: string;
  linkName?: string;
  as?: string;
}

export default function MyLink({
  linkText,
  className,
  href,
  linkId,
  linkName,
  as,
  onClickEvent,
  onSubmitEvent,
  linkType = "button",
}: MyLinkProps) {
  return (
    <Link href={href} as={as}>
      <button
        type={linkType}
        id={linkId}
        name={linkName}
        onClick={onClickEvent}
        onSubmit={onSubmitEvent}
        className={className}
      >
        {linkText}
      </button>
    </Link>
  );
}
