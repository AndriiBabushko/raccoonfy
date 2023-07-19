"use client";

import MyLink from "@/components/custom/MyLink";

const RegisterButton = () => {
  return (
    <MyLink
      linkText={"Sign up"}
      linkType={"button"}
      href={"/auth/signup"}
      className={
        "py-2 px-3 text-white bg-gray-700 transition-colors duration-300 ease-in-out rounded-lg hover:bg-gray-800"
      }
    />
  );
};

export default RegisterButton;
