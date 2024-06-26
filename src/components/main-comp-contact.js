import { Container } from "./container";
import { ContentTitle } from "./content-title";

export const MainCompContact = () => {
  return (
    <Container>
      <div className="space-y-12">
        <ContentTitle
          buttonName="Get in touch"
          title="What’s next? Feel free to reach out to me if you're looking
       for a developer, have a query, or simply want to connect."
        ></ContentTitle>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};
