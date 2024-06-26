import { GrLocation } from "react-icons/gr";
import { LuFigma, LuGithub, LuTwitter } from "react-icons/lu";
import { Container } from "./container";
import { ContainerContent } from "./container-content";
export const MainCompHi = () => {
  return (
    <Container>
      <ContainerContent>
        <div className="flex">
          <div className="flex-1 space-y-12 text-start">
            <div className="space-y-2">
              <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-50">
                Hi, I'm Tom👋
              </h1>
              <p>
                I specialize in full stack development, particularly with
                React.js and Node.js. My main goal is to create exceptional
                digital experiences that are fast, visually appealing, and
                accessible to everyone. With over 7 years of experience in web
                development, I continue to find joy in crafting innovative
                solutions and designs.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <GrLocation style={{ fontSize: "1.5em" }} />
                Ulaanbaatar,Mongolia
              </div>
              <div className="flex gap-4 ml-2 items-center">
                <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                Available for new projects
              </div>
            </div>
            <div className="flex text-2xl gap-4">
              <LuGithub />
              <LuTwitter />
              <LuFigma />
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="w-[17.5rem] h-80 bg-slate-500 border-8 border-white  shadow-hi"></div>
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
};
