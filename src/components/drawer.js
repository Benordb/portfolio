import { FiSun, FiMoon } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
export const Drawer = ({ isOpen, handleOpen, handleClick, dark }) => {
  return (
    <div
      className={`fixed bg-white dark:text-white dark:bg-gray-950 w-80 h-full z-10 top-0 dark:duration-0 duration-1000 shadow-md left-full ${isOpen ? "-translate-x-80" : "translate-x-0"
        } `}
    >
      <div className="flex justify-between p-4 border-b-2 border-gray-200 dark:border-gray-800">
        <a
          className="font-bold text-gray-900 dark:text-gray-50 text-3xl"
          href="#"
        >
          BEN
        </a>
        <IoMdClose fontSize="2em" onClick={handleOpen} />
      </div>
      <ul className="flex flex-col items-start p-4 gap-4 border-b-2 border-gray-200 dark:border-gray-800">
        <li>About</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
      <div className="p-4 space-y-4">
        <div className="flex justify-between">
          <p>Switch Theme</p>
          <div onClick={handleClick}>
            {dark == true ? (
              <FiMoon style={{ fontSize: "1.5em" }} />
            ) : (
              <FiSun style={{ fontSize: "1.5em" }} />
            )}
          </div>
        </div>
        <button className="bg-gray-900 rounded-xl w-full py-1 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          Download CV
        </button>
      </div>

    </div>
  )
}
