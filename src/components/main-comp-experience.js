import { ContentTitle } from "./content-title";
import { ExperienceCard } from "./experience-card";

export const MainCompExperience = () => {
  return (
    <div className="space-y-12">
      <ContentTitle
        buttonName="Experience"
        title="Here is a quick summary of my most recent experiences:"></ContentTitle>
      <ExperienceCard></ExperienceCard>
      <ExperienceCard></ExperienceCard>
      <ExperienceCard></ExperienceCard>
    </div>
  );
};
