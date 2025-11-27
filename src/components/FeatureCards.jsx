import { abilities } from "../constants";
import GlowCard from "./GlowCard";

const FeatureCards = () => (
  <div className="w-full md:px-10 lg:px-20 px-5 mb-8">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }, ind) => (
        <GlowCard index={ind} key={title}>
          <div key={title} className=" p-8 flex flex-col md:gap-4 gap-2">
            <div className="md:size-14 size-10 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white md:text-2xl text-lg font-semibold md:mt-2 mt-1.5">
              {title}
            </h3>
            <p className="text-white-50 md:text-lg">{desc}</p>
          </div>
        </GlowCard>
      ))}
    </div>
  </div>
);

export default FeatureCards;
