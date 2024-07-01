import { Children } from "react";
export const Container = ({ children, background }) => {
  return (
    <div className={`${background}`}>
      <div className="max-w-screen-xl px-4 py-16 m-auto sm:px-20 sm:py-24">
        {children}
      </div>
    </div>
  );
};
