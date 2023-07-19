"use client";

import MyButton from "@/components/custom/MyButton";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <MyButton
      buttonText={"Sign in"}
      buttonType={"button"}
      className={
        "py-2 px-3 text-white bg-gray-700 transition-colors duration-300 ease-in-out rounded-lg hover:bg-gray-800"
      }
      onClickEvent={() => signIn()}
    />
  );
}
