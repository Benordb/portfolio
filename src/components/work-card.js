import { ContentButton } from "./content-button";

export const WorkCard = ({ title, desc, skills, order }) => {
  return (
    <div className="flex flex-col sm:flex-row shadow-xl rounded-xl text-start overflow-hidden">
      <div
        className={`flex-1 bg-gray-50 dark:bg-gray-700 py-12 px-12 ${order}`}
      >
        <div className="rounded-lg w-full h-48 sm:h-96 bg-green-200"></div>
      </div>
      <div className="flex-1 dark:bg-gray-800 py-12 px-12 space-y-6">
        <h1 className="font-bold text-lg">{title}</h1>
        <p>{desc}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((item, index) => (
            <ContentButton key={index}>{item}</ContentButton>
          ))}
        </div>
      </div>
    </div>
  );
};
