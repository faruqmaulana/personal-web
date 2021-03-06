import Layout from "../components/Layout";

import { NextSeo } from "next-seo";
import { BASE_URL, stack } from "../utils/utils";

export default function skills() {
  const title = "Skills";
  const url = `${BASE_URL}/skills`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      <Layout titlePage={"Skills | FM space"}>
        <main className="container flex min-h-screen flex-col items-center justify-center p-0 lg:max-w-screen-lg">
          <h1 className="mb-5 mt-[100px] text-xl font-bold text-slate-300 sm:text-3xl md:mt-[140px] lg:mt-[140px]">
            My skills and knowledges
          </h1>
          <hr className="w-full border-solid border-gray-700 opacity-50 shadow-lg shadow-black" />
          <div className="mx-auto my-10 h-full w-11/12 rounded-lg bg-skill-primary px-4 py-12 text-slate-300 shadow sm:px-8 md:w-11/12 lg:w-full">
            <div className="mt-5 mb-5 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7 lg:grid-cols-4 lg:gap-10">
              {stack.map(({ name, img }) => (
                <div
                  key={name}
                  className="flex flex-col items-center rounded bg-skill-secondary p-5 shadow-lg duration-300 hover:shadow-lg hover:shadow-black "
                >
                  <div>{img}</div>
                  {/* prettier-ignore */}
                  <p className={`mt-2 text-center font-lexend font-bold ${name === "Visual Studio Code" ? "text-xs md:text-base lg:text-base" : name === "Tailwind CSS" ? "text-xs md:text-base lg:text-base" : name === "Styled Components" ? "text-xs sm:text-xs md:text-sm lg:text-base" : "text-sm md:text-lg lg:text-lg"}`}>
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
