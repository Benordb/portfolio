import { ContentButton } from "./content-button";

export const WorkCard = ({ order }) => {
  return (
    <div className="flex shadow-xl rounded-xl text-start">
      <div className={`flex-1 py-12 px-12 ${order}`}>
        <div className="rounded-lg w-full h-96 bg-green-200"></div>
      </div>
      <div className="flex-1 py-12 px-12 space-y-6">
        <h1 className="font-bold text-lg">UbCab</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-2">
          <ContentButton>React</ContentButton>
          <ContentButton>Next.js</ContentButton>
          <ContentButton>Typescript</ContentButton>
          <ContentButton>Nest.js</ContentButton>
          <ContentButton>PostgreSQL</ContentButton>
        </div>
      </div>
    </div>
  );
};
