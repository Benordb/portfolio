import { ContainerContent } from "./container-content";
export const MainCompHi = () => {
  return (
    <ContainerContent>
      <div className="flex">
        <div className="flex-1 space-y-12">
          <div className="space-y-2">
            <h1 className="text-3xl">Hi, I'm Tom</h1>
            <p>
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className="space-y-2">
            <div>Ulaanbaatar,Mongolia</div>
            <div>Available for new projects</div>
          </div>
          <div>icon</div>
        </div>
        <div className="flex-1">
          <div className="w-[17.5rem] h-80 bg-slate-500 border-8 border-white  shadow-hi"></div>
        </div>
      </div>
    </ContainerContent>
  );
};
