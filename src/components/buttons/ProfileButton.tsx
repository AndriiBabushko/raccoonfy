"use client";

import MyLink from "@/components/custom/MyLink";

const ProfileButton = () => {
  return (
    <MyLink
      linkText={"Profile"}
      linkType={"button"}
      href={"/user/profile"}
      className={
        "py-2 px-3 text-white bg-gray-700 transition-colors duration-300 ease-in-out rounded-lg hover:bg-gray-800"
      }
    />
  );
};

export default ProfileButton;
