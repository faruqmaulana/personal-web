import Image from "next/image";
import api from "../public/projects/api1.png";
import merpp from "../public/projects/merpp.png";
import covidAnxiety from "../public/projects/covid-anxiety.png";
import covidBed from "../public/projects/covid-bed.png";
import waniEkspor from "../public/projects/wani-ekspor.png";

export default function ProjectCard({
  idKey,
  projectTitle,
  desc,
  stack,
  children,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center rounded bg-skill-secondary p-5 shadow-lg duration-300 hover:translate-y-3 hover:shadow-lg hover:shadow-black">
        <Image
          src={
            idKey === 1
              ? api
              : idKey === 2
              ? merpp
              : idKey === 3
              ? merpp
              : idKey === 4
              ? covidAnxiety
              : idKey === 5
              ? covidBed
              : waniEkspor
          }
          layout="intrinsic"
          placeholder="blur"
          quality="100"
          className="rounded-sm"
        ></Image>
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-2 mt-3 text-lg font-bold text-secondary">
            {projectTitle}
          </h2>
          <hr className="mb-3 w-full border-solid border-gray-600" />
          <p className="text-sm md:text-lg lg:text-lg">{desc}</p>
          <div className="mt-3 flex flex-wrap justify-center">
            {stack.map(({ name }) => (
              <>
                <p
                  key={name}
                  className="space mx-1 rounded-lg bg-stack px-3 py-[3px] text-[7px] text-stack-color md:text-xs lg:text-xs"
                >
                  {name}
                </p>
              </>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
