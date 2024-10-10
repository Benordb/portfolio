import { UpWork } from "@/assets/icons/icon-upwork";
import { Container } from "./container";
import { ContentTitle } from "./content-title";
import { ExperienceCard } from "./experience-card";
const data = [
  {
    logo: <UpWork />,
    title: "Sr. Frontend Developer",
    edu: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    year: "Nov 2021 - Present",
  },
  {
    logo: <UpWork />,
    title: "Team Lead",
    edu: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    year: "Nov 2021 - Present",
  },
  {
    logo: <UpWork />,
    title: "Full Stack Developer",
    edu: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    year: "Nov 2021 - Present",
  },
];
export const MainCompExperience = () => {
  return (
    <Container background="bg-gray-50 dark:bg-gray-900">
      <div id="experience" className="flex flex-col gap-12 items-center">
        <ContentTitle
          buttonName="Experience"
          title="Here is a quick summary of my most recent experiences:"
        ></ContentTitle>
        {data.map((item, index) => (
          <ExperienceCard key={index} {...item}>
            {item}
          </ExperienceCard>
        ))}
      </div>
    </Container>
  );
};
