import Demo from "../components/Demo";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Github from "../components/Github";
import ProjectCard from "../components/ProjectCard";

import { NextSeo } from "next-seo";
import { BASE_URL, projectsList } from "../utils/utils";

export default function project() {
  const projects = projectsList.projects;
  const title = "Projects";
  const url = `${BASE_URL}/projects`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      <Layout titlePage={"Projects | FM space"}>
        <main className="container flex min-h-screen flex-col items-center justify-center p-0 lg:max-w-screen-lg">
          <h1 className="mb-5 mt-[100px] text-xl font-bold text-slate-300 sm:text-3xl md:mt-[140px] lg:mt-[140px]">
            Projects
          </h1>
          <hr className="w-full border-solid border-gray-700 opacity-50 shadow-lg shadow-black" />
          <div className="mx-auto my-10 h-full w-11/12 rounded-lg bg-skill-primary p-7 py-12 text-slate-300 shadow sm:p-8 md:w-11/12 md:p-8 lg:w-full">
            <div className="mt-5 mb-5 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-2">
              {projects.map(
                ({
                  id,
                  image,
                  projectTitle,
                  descProject,
                  githubLink,
                  github,
                  demoLink,
                  demo,
                  responsive,
                  stack,
                }) => (
                  <ProjectCard
                    key={projectTitle}
                    idKey={id}
                    imgsrc={image}
                    projectTitle={projectTitle}
                    responsive={responsive}
                    desc={descProject}
                    stack={stack}
                  >
                    {githubLink !== null && (
                      <Button link={githubLink} desc={github}>
                        <Github />
                      </Button>
                    )}
                    <Button link={demoLink} desc={demo}>
                      <Demo />
                    </Button>
                  </ProjectCard>
                )
              )}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
