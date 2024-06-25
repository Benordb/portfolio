import { ContentTitle } from "./content-title";
import { JavascriptIcon } from "../assets/icons/icon-js";

export const MainCompSkills = () => {
  return (
    <div className="space-y-12">
      <ContentTitle title="the technology" buttonName="skills"></ContentTitle>
      <div className="flex justify-between">
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
      </div>
      <div className="flex justify-between">
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
        <JavascriptIcon />
      </div>
    </div>
  );
};
