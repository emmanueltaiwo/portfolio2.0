"use client";

import Link from "next/link";
import { FULL_NAME } from "@/constants";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center text-[20px] font-[400] text-black dark:text-white"
    >
      {FULL_NAME}
    </Link>
  );
};

export default Logo;
