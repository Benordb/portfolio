import { Container } from "./container";
import { ContentTitle } from "./content-title";
import { WorkCard } from "./work-card";

export const MainCompWork = () => {
  return (
    <Container>
      <div>
        <ContentTitle
          buttonName="Work"
          title="Some of the noteworthy projects I have built:"
        />
        <WorkCard></WorkCard>
        <WorkCard order="order-1"></WorkCard>
        <WorkCard></WorkCard>
      </div>
    </Container>
  );
};
