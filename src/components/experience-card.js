export const ExperienceCard = ({ logo, title, edu, year }) => {
  return (
    <div className="px-8 py-8 flex flex-col sm:flex-row items-start justify-between space-y-4 w-fill sm:w-[896px] dark:bg-gray-800 bg-white rounded-lg">
      {logo}
      <div className="text-start space-y-4 w-full sm:w-[384px] order-1 sm:order-none">
        <h1 className="font-bold text-xl dark:text-white text-black">
          {title}
        </h1>
        <ul className="list-disc ml-4 space-y-1">
          {edu.map((item, index) => (
            <li key={index} {...item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p>{year}</p>
    </div>
  );
};
