import { MainCompHi } from "@/components/main-comp-hi";
import { Container } from "../components/container";
import { MainCompAboutme } from "@/components/main-comp-aboutme";
import { MainCompSkills } from "@/components/main-comp-skills";
import { MainCompExperience } from "@/components/main-comp-experience";
import { MainCompWork } from "@/components/main-comp-works";
import { MainCompContact } from "@/components/main-comp-contact";

export default function Home() {
  return (
    <main className="text-black bg-white text-center">
      <Container>
        <MainCompHi></MainCompHi>
      </Container>
      <Container background="bg-slate-100">
        <MainCompAboutme></MainCompAboutme>
      </Container>
      <Container>
        <MainCompSkills></MainCompSkills>
      </Container>
      <Container background="bg-slate-100">
        <MainCompExperience></MainCompExperience>
      </Container>
      <Container>
        <MainCompWork></MainCompWork>
      </Container>
      <Container>
        <MainCompContact></MainCompContact>
      </Container>
    </main>
  );
}
