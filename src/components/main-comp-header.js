import { FiSun, FiMoon } from "react-icons/fi";
import { Container } from "./container";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { Drawer } from "./drawer";
export const MainCompHeader = ({ handleClick, dark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header className="sm:px-20 px-4 py-4  max-w-screen-xl m-auto">
        <div className="sm:px-8 flex justify-between">
          <a
            className="font-bold text-gray-900 dark:text-gray-50 text-3xl"
            href="#"
          >
            TOM
          </a>
          <div className="sm:flex items-center gap-4 hidden">
            <ul className="flex gap-6">
              <li>About</li>
              <li>Work</li>
              <li>Testimonials</li>
              <li>Contact</li>
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
      <Drawer isOpen={isOpen} handleOpen={handleOpen}></Drawer>
    </div>
  );
};
