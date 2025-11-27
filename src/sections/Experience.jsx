import Timeline from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <div className="flex-center md:mt-40 mt-20 section-padding xl:px-0" id="experience">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
