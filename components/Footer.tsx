import { FULL_NAME } from "@/constants";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import BookIcon from '@mui/icons-material/Book';

const Footer = () => {
  const [firstName, lastName] = FULL_NAME.split(" ");

  return (
    <footer
      id="contact"
      className="w-full mt-auto bg-white dark:bg-black py-10 flex flex-col md:flex-row justify-between"
    >
      <div className="flex flex-col gap-3 ml-[10px] sm:ml-[20px] md:ml-[50px] lg:ml-[100px] xl:ml-[200px]">
        <h1 className="text-[25px] font-[600] text-black dark:text-white uppercase">
          <span className="text-blue-500">{firstName} </span>
          {lastName}
        </h1>

        <h3 className="text-blue-600 text-[15px] font-[400]">
          SOFTWARE ENGINEER
        </h3>

        <h5 className="mt-10 text-black dark:text-white text-[15px] font-[500]">
          Follow Me
        </h5>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/emmanueltaiwo"
            target="_blank"
            className="text-black dark:text-white border-2 border-blue-800 hover:bg-blue-800 p-[8px] rounded-full "
          >
            <GitHubIcon fontSize="medium" />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanueloluwafunso/"
            target="_blank"
            className="text-black dark:text-white border-2 border-blue-800 hover:bg-blue-800 p-[8px] rounded-full "
          >
            <LinkedInIcon fontSize="medium" />
          </a>
          <a
            href="https://twitter.com/thedevemmanuel"
            target="_blank"
            className="text-black dark:text-white border-2 border-blue-800 hover:bg-blue-800 p-[8px] rounded-full "
          >
            <XIcon fontSize="medium" />
          </a>
          <a
            href="https://taiwoemmanuel.hashnode.dev/"
            target="_blank"
            className="text-black dark:text-white border-2 border-blue-800 hover:bg-blue-800 p-[8px] rounded-full "
          >
            <BookIcon fontSize="medium" />
          </a>
        </div>
      </div>

      <div className="ml-[10px] sm:ml-[20px] md:ml-0 md:mr-[50px] lg:mr-[100px] xl:mr-[200px] flex flex-col gap-5">
        <h5 className="mt-10 text-black dark:text-white text-[15px] font-[500]">
          Contact Me
        </h5>

        <ul className="flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <EmailIcon className="text-blue-800" fontSize="medium" />
            <a
              href="mailto:devemmanuel1@gmail.com"
              target="_blank"
              className="text-black dark:text-white text-[14px] font-[400]"
            >
              devemmanuel1@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
