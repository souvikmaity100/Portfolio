import { useState } from "react";
import FeatureCards from "../components/FeatureCards";
import LogoSlider from "../components/LogoSlider";
import { skills } from "../constants";
import GlowCard from "../components/GlowCard";

const categories = ["all", "frontend", "backend", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <div
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
      id="skills"
    >
      <div className="w-full h-full md:px-20 px-5">
        <h1 className="font-semibold md:text-4xl text-3xl text-center">
          My Technical Skills
        </h1>
        <div>
          <div className="flex flex-wrap justify-center gap-1 md:gap-4 mb-12 mt-8">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={
                  `px-3 md:px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer ` +
                  (activeCategory === category
                    ? "text-violet-700"
                    : "text-gray hover:text-violet-700")
                }
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
              <GlowCard key={key} index={key}>
                <div className="py-3 px-6 rounded-lg">
                  <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg"> {skill.name}</h3>
                  </div>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-l from-indigo-700 to-purple-800 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                      style={{ width: skill.level + "%" }}
                    />
                  </div>

                  <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
        <LogoSlider />
        <FeatureCards />
      </div>
    </div>
  );
};

export default Skills;
