import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../models/hero/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-20">
        <img src="/images/bg.png" alt="hero-bg" />
      </div>

      <div className="hero-layout">
        {/* Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Converting{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map(({ text, img_path, text_col }, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={img_path}
                          alt={text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span className={text_col}>{text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1> into Real Projects </h1>
              <h1> that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-3xl">
              Hey, I'm <span className="text-orange-400">Souvik</span> — a
              developer who enjoys building smart solutions for the web with
              clarity, creativity, and clean code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="projects"
            />
          </div>
        </header>

        {/* 3D Model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
