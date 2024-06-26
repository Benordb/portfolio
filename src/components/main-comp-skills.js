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
    icon: <ExpressIcon />,
    iconName: "javascript",
  },
  {
    icon: <NestIcon />,
    iconName: "javascript",
  },
  {
    icon: <SocketIcon />,
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
    icon: <CypressIcon />,
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
export const MainCompSkills = ({ isDark }) => {
  return (
    <Container>
      <div className="space-y-12">
        <ContentTitle
          title="The skills, tools and technologies I am really good at:"
          buttonName="Skills"
        ></ContentTitle>
        <div className="grid grid-cols-8">
          {data.map((item, index) => (
            
            <SkillsIcon key={index} {...item}>
              {item}
              if (item.iconName == "mongodb") {
                <MongoDBIcon color={isDark ? "white" : "black"} />;
              }
            </SkillsIcon>
          ))}
        </div>
      </div>
    </Container>
  );
};
// if (item.iconName == "mongodb") {
//   <MongoDBIcon color={isDark ? "white" : "black"} />;
// }