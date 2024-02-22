"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { ModeToggle } from "./ToggleTheme";
import { NAV_LINKS } from "@/constants";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setPathname } from "@/lib/features/pathname/pathnameSlice";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex md:hidden">
      {!isOpen && (
        <div className="mr-[10px] sm:mr-[20px] flex items-center gap-5">
          <button
            className="text-blue-800 dark:text-blue-500"
            onClick={() => setIsOpen(true)}
          >
            <WindowRoundedIcon />
          </button>

          <ModeToggle />
        </div>
      )}

      {isOpen && (
        <div className="bg-gray-100 dark:bg-[#181818] h-screen fixed top-0 bottom-0 left-0 right-0 z-50 transition-all duration-200 flex flex-col">
          <div className="absolute left-0 ml-[10px] sm:ml-[20px] mt-[1.25rem] rounded-full flex items-center justify-center">
            <Logo />
          </div>
          <button
            className="text-blue-800 dark:text-blue-500 absolute right-0 mr-[10px] sm:mr-[20px] mt-[1.25rem] border-[2px] p-[2px] rounded-full flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <CloseRoundedIcon />
          </button>

          <ul className="ml-[10px] sm:ml-[20px] mt-[80px] flex flex-col gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.route}
                className="dark:text-white text-[15px] font-[400] transition-all duration-500"
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const dispatch = useAppDispatch();
  const pathname = useAppSelector((state) => state.pathname.pathname);

  return (
    <header className="w-full z-50 sticky top-0 h-[4.5rem] bg-white dark:bg-black shadow-md dark:shadow-gray-900 flex justify-between items-center">
      <div
        className="ml-[10px] sm:ml-[20px] md:ml-[50px] lg:ml-[100px] xl:ml-[200px]"
        onClick={() => dispatch(setPathname("/"))}
      >
        <Logo />
      </div>

      <ul className="hidden md:mr-[50px] lg:mr-[100px] xl:mr-[200px] md:flex items-center gap-5 lg:gap-10">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.id}
            href={link.route}
            className={`dark:text-white text-[14px] font-[400] p-2 text-center mx-auto w-fit transition-all duration-200 rounded-[2px] ${
              pathname === link.route && "border-b-2 border-blue-800"
            }`}
            onClick={() => dispatch(setPathname(link.route))}
          >
            {link.title}
          </Link>
        ))}

        <ModeToggle />
      </ul>

      <MobileHeader />
    </header>
  );
};

export default Header;
