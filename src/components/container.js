import { Children } from "react";
export const Container = ({ children, background }) => {
  return (
    <div className={`${background}`}>
      <div className={` max-w-screen-xl m-auto px-20 py-24`}>{children}</div>
    </div>
  );
};
