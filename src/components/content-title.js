import { ContentButton } from "./content-button";

export const ContentTitle = ({ title, buttonName }) => {
  return (
    <div className="space-y-4">
      <ContentButton content={buttonName} />
      <p className="max-w-xl m-auto">{title}</p>
    </div>
  );
};
