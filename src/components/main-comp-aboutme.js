import { ContainerContent } from "./container-content";
import { ContentButton } from "./content-button";
import { Container } from "./container";

export const MainCompAboutme = () => {
  return (
    <Container background="bg-gray-50 dark:bg-gray-900">
      <ContainerContent>
        <ContentButton children="About me" />
        <div className="flex">
          <div className="flex-1">
            <div className="w-[25rem] h-[30rem] bg-slate-500 border-8 border-white shadow-aboutme"></div>
          </div>
          <div className="flex-1 space-y-6 text-start text-sm">
            <h1 className="text-gray-900 dark:bg-gray-50 font-bold text-2xl">
              Curious about me? Here you have it:
            </h1>
            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <ul className="grid grid-cols-2 list-disc  ml-4">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
              <li>Full time freelancer</li>
            </ul>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
};
