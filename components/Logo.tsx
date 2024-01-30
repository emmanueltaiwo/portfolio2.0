"use client";

import Link from "next/link";
import { FULL_NAME } from "@/constants";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center text-[16px] font-[500] text-blue-800 dark:text-blue-500"
    >
      {FULL_NAME}
    </Link>
  );
};

export default Logo;
