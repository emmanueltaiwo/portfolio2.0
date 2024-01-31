"use client";

import React, { FC } from "react";

type Props = {
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full p-4 rounded-[10px] border-2 border-black dark:border-white text-black dark:text-white placeholder:text-black dark:placeholder:text-white font-[400] text-[14px] bg-transparent outline-none"
    />
  );
};

export default Input;
