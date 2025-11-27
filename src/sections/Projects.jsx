import React from "react";
import { projects } from "../constants";
import GlowCard from "../components/GlowCard";
import ImageCard from "../components/ImageCard";

const Projects = () => {
  // eslint-disable-next-line react-hooks/purity
  const shuffleProjects = projects.sort(() => 0.5 - Math.random());
  return (
    <div
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
      id="projects"
    >
      <div className="w-full h-full md:px-10 lg:px-20 px-5">
        <h1 className="font-semibold md:text-4xl text-3xl text-center">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-20">
          {shuffleProjects.map((project, key) => (
            <GlowCard index={key} key={project.title}>
              <div className="group rounded-lg overflow-hidden shadow-xs h-full">
                <div className="h-50 md:h-75 overflow-hidden">
                  <ImageCard
                    src={project.image}
                    alt={project.title}
                    css_class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, key) => (
                      <span
                        className="px-2 py-1 text-xs font-medium border rounded-full border-gray-400 text-blue-500"
                        key={key}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {" "}
                    {project.title}
                  </h3>
                  <p className="mb-4 subtext text-sm">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3 z-50">
                      {project?.demoUrl && (
                        <a href={project.demoUrl} target="_blank">
                          <img
                            src="/external-link.svg"
                            className="size-5 invert-100 hover:invert-75"
                            alt="external-link"
                            title="Open Live"
                          />
                        </a>
                      )}
                      {project?.githubUrl && (
                        <a href={project.githubUrl} target="_blank">
                          <img
                            src="/github.svg"
                            className="size-5 invert-100 hover:invert-75"
                            alt="github"
                            title="Open On GitHub"
                          />
                        </a>
                      )}
                    </div>
                    <p className="text-white-50">🗓️&nbsp;{project.date}</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
