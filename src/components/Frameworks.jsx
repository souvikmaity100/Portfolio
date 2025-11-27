import { logoIconsList } from "../constants";
import OrbitingCircles from "./OrbitingCircles";

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

const Frameworks = () => {
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {logoIconsList.map(({ imgPath }, index) => (
          <Icon key={index} src={imgPath} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {logoIconsList.reverse().map(({ imgPath }, index) => (
          <Icon key={index} src={imgPath} />
        ))}
      </OrbitingCircles>
    </div>
  );
};

export default Frameworks;
