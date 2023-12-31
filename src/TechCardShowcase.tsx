import TechCard from "./TechCard";

export default function TechCardShowcase() {
  return (
    <div
      className="
        grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2
        xl:gap-4 lg:gap-3 gap-2
        pt-16
        text-center
      "
    >
      <TechCard name="Typescript">
      </TechCard>
      <TechCard name="React">
      </TechCard>
      <TechCard name="Python">
      </TechCard>
      <TechCard name="Node">
      </TechCard>
      <TechCard name="Node">
      </TechCard>
      <TechCard name="Node">
      </TechCard>
      <TechCard name="Node">
      </TechCard>
    </div>
  );
}
