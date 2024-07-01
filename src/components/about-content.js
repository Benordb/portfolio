export const AboutContent = ({ title, desc }) => {
  return (
    <div className="flex-1 space-y-6 text-start text-sm">
      <h1 className="text-gray-900 dark:text-gray-50 font-bold text-2xl">
        {title}
      </h1>
      {desc.map((item, index) => (
        <p key={index} {...item}>
          {item}
        </p>
      ))}
    </div>
  );
};
