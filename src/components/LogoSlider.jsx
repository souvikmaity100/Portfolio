import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item size-10">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSlider = () => (
  <div className="md:my-4 my-2 relative overflow-hidden">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-42">
      <div className="marquee-box md:gap-10 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
        
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoSlider;
