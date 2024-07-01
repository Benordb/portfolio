import { ContainerContent } from "./container-content";
import { ContentButton } from "./content-button";
import { Container } from "./container";
import { AboutContent } from "./about-content";
const data = [
  {
    title: "Curious about me? Here you have it:",
    desc: [
      `I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.`,
      `Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.`,
      `With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.`,
      `Finally, some quick bits about me.`,
      // {
      //   status: [
      //     `B.E. in Computer Engineering`,
      //     `Avid learner`,
      //     `Full time freelancer`,
      //   ],
      // },
      `One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉`,
    ],
  },
];
export const MainCompAboutme = () => {
  return (
    <Container background="bg-gray-50 dark:bg-gray-900">
      <ContainerContent>
        <ContentButton children="About me" />
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 flex justify-center sm:justify-start">
            <div className="w-[25rem] dark:w-[17.5rem] dark:h-[22.5rem] h-[30rem] bg-slate-500 border-8 mb-16 sm:mb-0 border-white shadow-[0px_25px_0px_10px_#e5e7eb]  sm:shadow-[-40px_40px_#e5e7eb]"></div>
          </div>

          {data.map((item, index) => (
            <AboutContent key={index} {...item}>
              {item}
            </AboutContent>
          ))}
          {/* <ul className="grid grid-cols-2 list-disc  ml-4">
              <li></li>
              <li></li>
              <li></li>
            </ul> */}
        </div>
      </ContainerContent>
    </Container>
  );
};
