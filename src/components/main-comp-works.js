import { Container } from "./container";
import { ContentTitle } from "./content-title";
import { WorkCard } from "./work-card";

const data = [
  {
    title: "UBCab",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    title: "Mentorhub",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    order: "sm:order-1",
    skills: ["React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Git",],
  },
  {
    title: "iToim",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: ["React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "Git",],
  },
];
export const MainCompWork = () => {
  return (
    <Container>
      <div className="space-y-12">
        <ContentTitle
          buttonName="Work"
          title="Some of the noteworthy projects I have built:"
        />
        {data.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
    </Container>
  );
};
