import React, { useRef } from "react";
import Card from "../components/Card";
import { floatingImages } from "../constants";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import Frameworks from "../components/Frameworks";

const AboutMe = () => {
  const containerRef = useRef();
  return (
    <section className="md:mt-40 mt-20 section-padding xl:px-0" id="aboutme">
      <div className="w-full h-full md:px-10 lg:px-20 px-5">
        <h1 className="font-semibold md:text-4xl text-3xl text-center">
          About Me
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          <div className="flex items-end grid-default-color grid-1">
            <img
              src="/images/coding-pov.png"
              alt="coding"
              className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            />
            <div className="z-10">
              <p className="headtext">Hi, I'm Souvik Maity</p>
              <p className="subtext">
                Over the last 2 years, I developed my frontend and backend dev
                skills to deliver dynamic and responsive web applications.
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-700" />
          </div>
          <div className="grid-default-color grid-2">
            <div
              className="flex items-center justify-center w-full h-full"
              ref={containerRef}
            >
              <p className="flex items-end text-5xl text-gray-500 select-none">
                MY FAVORITE TOOLS
              </p>
              {floatingImages.map((item, index) => (
                <Card
                  key={`floating-image-${index}`}
                  style={item.style}
                  image={item.imgPath}
                  containerRef={containerRef}
                />
              ))}
            </div>
          </div>
          <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
              <p className="headtext">West Bengal, India</p>
              <p className="subtext">
                I'm open to remote work and work from office
              </p>
            </div>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>
          <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
              <p className="text-center headtext">
                Do you want to start a project together?
              </p>
              <CopyEmailButton />
            </div>
          </div>
          <div className="grid-default-color grid-5">
            <div className="z-10 w-[50%]">
              <p className="headtext">Teck Stack</p>
              <p className="subtext">
                I specialize in a variety of languages, frameworks, and tools
                taht allow me to build robust and scalable applications
              </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
              <Frameworks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
