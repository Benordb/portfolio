import { ContentTitle } from "./content-title";
import { Container } from "./container";
import { SkillsIcon } from "./icon";
import {
  CypressIcon,
  ExpressIcon,
  FigmaIcon,
  GitIcon,
  JavascriptIcon,
  MongoDBIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  SassIcon,
  SocketIcon,
  StorybookIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "@/assets/icons";

export const MainCompSkills = ({ isDark }) => {
  const data = [
    {
      icon: <JavascriptIcon />,
      iconName: "javascript",
    },
    {
      icon: <TypescriptIcon />,
      iconName: "javascript",
    },
    {
      icon: <ReactIcon />,
      iconName: "javascript",
    },
    {
      icon: <NextIcon />,
      iconName: "javascript",
    },
    {
      icon: <NodeIcon />,
      iconName: "javascript",
    },
    {
      icon: <ExpressIcon color={isDark ? "white" : "black"} />,
      iconName: "javascript",
    },
    {
      icon: <NestIcon />,
      iconName: "javascript",
    },
    {
      icon: <SocketIcon color={isDark ? "white" : "black"} />,
      iconName: "javascript",
    },
    {
      icon: <StorybookIcon />,
      iconName: "javascript",
    },
    {
      icon: <MongoDBIcon />,
      iconName: "mongodb",
    },
    {
      icon: <SassIcon />,
      iconName: "javascript",
    },
    {
      icon: <TailwindcssIcon />,
      iconName: "javascript",
    },
    {
      icon: <FigmaIcon />,
      iconName: "javascript",
    },
    {
      icon: <CypressIcon color={isDark ? "white" : "black"} />,
      iconName: "javascript",
    },
    {
      icon: <StorybookIcon />,
      iconName: "javascript",
    },
    {
      icon: <GitIcon />,
      iconName: "javascript",
    },
  ];

  return (
    <Container>
      <div className="space-y-12">
        <ContentTitle
          title="The skills, tools and technologies I am really good at:"
          buttonName="Skills"
        ></ContentTitle>
        <div className="grid grid-cols-3 sm:grid-cols-8">
          {data.map((item, index) => (
            <SkillsIcon key={index} {...item}>
              {item}
            </SkillsIcon>
          ))}
        </div>
      </div>
    </Container>
  );
};