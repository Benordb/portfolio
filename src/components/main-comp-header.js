import { FiSun, FiMoon } from "react-icons/fi";
export const MainCompHeader = ({ handleClick, dark }) => {
  return (
    <header className="px-20 py-4">
      <div className="px-8 flex justify-between">
        <a
          className="font-bold text-gray-900 dark:text-gray-50 text-3xl"
          href="#"
        >
          TOM
        </a>
        <div className="flex items-center gap-4">
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
      </div>
    </header>
  );
};
