import Layout from "../components/Layout";

export default function skills() {
  const skills = [
    { name: "HTML", img: "/skills/html.svg" },
    { name: "CSS", img: "/skills/css.svg" },
    { name: "JavaScript", img: "/skills/js.svg" },
    { name: "React", img: "/skills/react.svg" },
    { name: "jQuery", img: "/skills/jquery.svg" },
    { name: "Cheerio", img: "/skills/cheerio.svg" },
    { name: "NextJs", img: "/skills/nextjs.svg" },
    { name: "Tailwind CSS", img: "/skills/tailwind.svg" },
    { name: "Bootstrap", img: "/skills/bootstrap.svg" },
    { name: "Styled Components", img: "/skills/sc.svg" },
    { name: "Visual Studio Code", img: "/skills/vsc.svg" },
    { name: "Git", img: "/skills/git.svg" },
    { name: "Github", img: "/skills/github.svg" },
    { name: "Vercel", img: "/skills/vercel.svg" },
    { name: "Netlify", img: "/skills/netlify.svg" },
    { name: "Herokuapp", img: "/skills/heroku.svg" },
  ];

  return (
    <>
      <Layout titlePage={"Skills | FM space"}>
        <main className="container flex min-h-screen flex-col items-center justify-center p-0 lg:max-w-screen-lg">
          <h1 className="mb-5 mt-[100px] text-xl font-bold text-slate-300 sm:text-3xl md:mt-[140px] lg:mt-[140px]">
            My skills and knowledges
          </h1>
          <hr className="w-full border-solid border-gray-700 opacity-50 shadow-lg shadow-black" />
          <div className="mx-auto my-10 h-full w-11/12 rounded-lg bg-skill-primary p-8 py-12 text-slate-300 shadow md:w-11/12 lg:w-full">
            <div className="mt-5 mb-5 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7 lg:grid-cols-4 lg:gap-10">
              {skills.map(({ name, img }) => (
                <div
                  key={name}
                  className="flex h-[155px] flex-col items-center justify-between rounded bg-skill-secondary p-5 shadow-lg duration-300 hover:translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-black md:h-[185px] md:hover:translate-y-2 lg:h-[185px] lg:hover:translate-y-3"
                >
                  <div className="flex h-[100px] w-[100px] items-center justify-center">
                    <img
                      src={img}
                      className={`rounded-sm md:h-[85px] md:w-[85px] lg:h-[100px] lg:w-[100px] ${
                        name === "Visual Studio Code"
                          ? "h-[60px] w-[60px]"
                          : "h-[75px] w-[75px]"
                      }`}
                      alt=""
                    />
                  </div>
                  {/* prettier-ignore */}
                  <p className={`mt-2 text-center font-lexend font-bold ${
                      name === "Visual Studio Code" ? "text-xs md:text-base lg:text-base" : name === "Tailwind CSS" ? "text-xs md:text-base lg:text-base" : name === "Styled Components" ? "text-xs md:text-base lg:text-base" : "text-sm md:text-lg lg:text-lg"}`}>
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
