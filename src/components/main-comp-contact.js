import {
  LuCopy,
  LuMail,
  LuPhone,
  LuFigma,
  LuGithub,
  LuTwitter,
} from "react-icons/lu";
import { Container } from "./container";
import { ContainerContent } from "./container-content";
import { ContentTitle } from "./content-title";

export const MainCompContact = () => {
  return (
    <Container>
      <ContainerContent>
        <div id="contact" className="space-y-12">
          <ContentTitle
            buttonName="Get in touch"
            title="What’s next? Feel free to reach out to me if you're looking
       for a developer, have a query, or simply want to connect."
          ></ContentTitle>
          <div className="flex flex-col items-center gap-4">
            <div className="text-lg sm:text-3xl flex items-center gap-5 text-gray-950 font-semibold dark:text-gray-50">
              <LuMail />
              tom@pinecone.mn
              <LuCopy />
            </div>
            <div className="text-lg sm:text-3xl flex items-center gap-5 text-gray-950 font-semibold dark:text-gray-50">
              <LuPhone />
              +976 88112233
              <LuCopy />
            </div>
          </div>
          <div className="space-y-2">
            <p>You may also find me on these platforms!</p>
            <div className="flex gap-4 text-2xl justify-center">
              <LuGithub />
              <LuTwitter />
              <LuFigma />
            </div>
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
};
