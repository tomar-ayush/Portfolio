import React from "react";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects.config";
import { ProjectCard } from "../ui/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-3xl  md:mx-auto md:my-8 xl:my-10 mx-4 ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center  ">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-2 text-sm font-semibold">
              My Projects
            </div>

            <p className="text-muted-foreground md:text-base/relaxed py-4">
              I love building cool things which people love to use. Here are a few of my projects. You can find more on my{" "}
              <Link href="/projects" className="text-blue-500 hover:underline">
                projects page
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[700px] mx-auto mt-8">
          {PROJECTS.map((project, id) => (
            
            <ProjectCard
              href={project.href}
              active={project.active}
              archived={project.archived}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
