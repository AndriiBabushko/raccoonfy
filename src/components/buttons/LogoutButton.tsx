"use client";

import { signOut } from "next-auth/react";

import MyButton from "@/components/custom/MyButton";

const LogoutButton = () => {
  return (
    <MyButton
      buttonText={"Sign Out"}
      buttonType={"button"}
      className={
        "py-2 px-3 text-white bg-gray-700 transition-colors duration-300 ease-in-out rounded-lg hover:bg-gray-800"
      }
      onClickEvent={() => signOut()}
    />
  );
};

export default LogoutButton;
