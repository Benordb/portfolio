import { FiSun, FiMoon } from "react-icons/fi";
import { Container } from "./container";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { Drawer } from "./drawer";
import Link from "next/link";
export const MainCompHeader = ({ handleClick, dark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header className="sm:px-20 px-4 py-4  max-w-screen-xl m-auto">
        <div className="sm:px-8 flex justify-between">
          <Link href="/">
            <div className="font-bold text-gray-900 dark:text-gray-50 text-3xl">
              BEN
            </div>
          </Link>
          <div className="sm:flex items-center gap-4 hidden">
            <ul className="flex gap-6">
              <Link href="#about">
                <li>About</li>
              </Link>
              <Link href="#experience">
                <li>Experience</li>
              </Link>
              <Link href="#work">
                <li>Work</li>
              </Link>
              <Link href="#contact">
                <li>Contact</li>
              </Link>
              <li className="border-[1px]"></li>
            </ul>
            <div onClick={handleClick}>
              {dark == true ? (
                <FiMoon style={{ fontSize: "1.5em" }} />
              ) : (
                <FiSun style={{ fontSize: "1.5em" }} />
              )}
            </div>
            <button className="bg-gray-900 rounded-xl px-4 py-1 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
              Download CV
            </button>
          </div>
          <div className="text-3xl pt-[2px] sm:hidden">
            <LuMenu onClick={handleOpen} />
          </div>
        </div>
      </header>
      <Drawer
        dark={dark}
        handleClick={handleClick}
        isOpen={isOpen}
        handleOpen={handleOpen}
      ></Drawer>
    </div>
  );
};
