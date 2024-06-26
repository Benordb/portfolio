export const ExperienceCard = ({ logo, title, edu, year }) => {
  return (
    <div className="px-8 py-8 flex justify-between w-[896px] bg-white rounded-lg">
      {logo}
      <div className="text-start space-y-4 w-[384px]">
        <h1 className="font-bold text-xl text-black">{title}</h1>
        <ul className="list-disc ml-4 space-y-1">
          {/* {edu.forEach((element) => {
            <li>{element}</li>;
          })} */}
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
