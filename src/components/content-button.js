export const ContentButton = ({ children, icon }) => {
  return (
    <button className="py-1 px-5 bg-gray-200 dark:bg-gray-700 rounded-xl">
      {children}
      {icon}
    </button>
  );
};
