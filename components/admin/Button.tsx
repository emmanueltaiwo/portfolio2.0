"use client";

import React, { FC, ReactNode } from "react";

type Props = {
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  children: ReactNode;
};

const Button: FC<Props> = ({ type, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="w-full p-4 rounded-[10px] bg-[#1c1c1c] hover:bg-[#141414] dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-black font-[400] text-[16px]"
    >
      {children}
    </button>
  );
};

export default Button;
