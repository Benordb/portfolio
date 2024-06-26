import { ContentButton } from "./content-button";

export const ContentTitle = ({ title, buttonName }) => {
  return (
    <div className="space-y-4">
      <ContentButton>{buttonName}</ContentButton>
      <p className="max-w-xl m-auto">{title}</p>
<p></p>

    </div>
  );
};
