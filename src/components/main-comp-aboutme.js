import { ContainerContent } from "./container-content";
import { ContentButton } from "./content-button";

export const MainCompAboutme = () => {
  return (
    <ContainerContent>
      <ContentButton children="About me" />
      <div className="flex">
        <div className="flex-1">
          <div className="w-[25rem] h-[30rem] bg-slate-500 border-8 border-white shadow-aboutme"></div>
        </div>
        <div className="flex-1 space-y-6">
          <h1>Cur</h1>
          <div className="space-y-4">
            <h1 className="text-xl">Hi, I'm Tom</h1>
            <p>
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
        </div>
      </div>
    </ContainerContent>
  );
};
