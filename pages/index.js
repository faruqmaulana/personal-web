import Image from "next/image";
import profile from "../public/profile.jpeg";
import Layout from "../components/Layout";
//
export default function Home() {
  return (
    <>
      <Layout titlePage={"FM space"}>
        <main className="container flex min-h-screen items-center justify-center lg:max-w-screen-lg">
          <div className="mt-16 flex h-full w-full flex-col items-center justify-center rounded-lg py-12">
            <span>
              <Image
                src={profile}
                width={250}
                height={250}
                alt={"faruq maulana profile"}
                quality="100"
                objectFit="cover"
                placeholder="blur"
                layout="intrinsic"
                className="rounded-full transition-all duration-700 ease-in-out"
              ></Image>
            </span>
            <div className="align-center mx-auto mt-10 flex w-full flex-col items-center text-center text-secondary">
              <h1 className="mb-3 text-lg font-bold md:text-2xl lg:text-2xl">
                {"Hi! I'm Faruq Maulana 👋"}
              </h1>
              <h2 className="mb-5 text-sm font-bold md:text-lg lg:text-lg">
                Frontend Web Developer, 19 years old.
              </h2>
              <hr className="mb-2 w-full border-solid border-slate-600 opacity-50" />
              <p className="px-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                {
                  "Hello there, my full name is M. Faruq Maulana, and people who's know me call me Faruq. For now, I live in Surabaya, East Java and I'm working as a freelance Frontend Web developer. I am a student majoring in Informatics Engineering, "
                }
                <a href="https://www.untag-sby.ac.id/" className="text-onhover">
                  17 August 1945 University Surabaya (UNTAG).
                </a>
                {
                  " I Love make something that useful for the others like make an application website and I'm prefer in Frontend website development using ReactJS or Next Js, and until now, I'm still learning, because everyday the technologies is continues to develop."
                }
              </p>
              <p className="mb-2 mt-5 p-2 px-7 text-sm leading-relaxed text-slate-300 sm:text-base">
                {"My social media account, let's connect with me :"}
              </p>
              <div className="flex flex-row justify-center">
                <span className="text-slate-300 duration-300 hover:scale-95 hover:text-onhover">
                  <a
                    href="https://github.com/faruqmaulana/"
                    target="_blank"
                    rel="noreferrer"
                    title="faruqmaulana's github"
                  >
                    <svg
                      width="1.2em"
                      height="1.2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      className="text-elucidator-700 dark:text-dark-repulser-400 mr-3 flex cursor-pointer text-3xl"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z"
                      ></path>
                    </svg>
                  </a>
                </span>
                <span className="text-slate-300 duration-300 hover:scale-95 hover:text-onhover">
                  <a
                    href="https://twitter.com/promiseee123/"
                    target="_blank"
                    rel="noreferrer"
                    title="faruqmaulana's twitter"
                  >
                    <svg
                      width="1.2em"
                      height="1.2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      className="text-elucidator-700 dark:text-dark-repulser-400 mr-3 flex cursor-pointer text-3xl"
                    >
                      <path
                        fill="currentColor"
                        d="M22 5.8a8.49 8.49 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.21 8.21 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a3.93 3.93 0 0 1-1.1.17a4.9 4.9 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z"
                      ></path>
                    </svg>
                  </a>
                </span>
                <span className="text-slate-300 duration-300 hover:scale-95 hover:text-onhover">
                  <a
                    href="https://instagram.com/faruq.maulanaa/"
                    target="_blank"
                    rel="noreferrer"
                    title="faruqmaulana's instagram"
                  >
                    <svg
                      width="1.2em"
                      height="1.2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      className="text-elucidator-700 dark:text-dark-repulser-400 mr-3 flex cursor-pointer text-3xl"
                    >
                      <path
                        fill="currentColor"
                        d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
                      ></path>
                    </svg>
                  </a>
                </span>
                <span className="text-slate-300 duration-300 hover:scale-95 hover:text-onhover">
                  <a
                    href="https://t.me/faruqmaulanaa/"
                    target="_blank"
                    rel="noreferrer"
                    title="faruqmaulana's telegram"
                  >
                    <svg
                      width="1.2em"
                      height="1.2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      className="text-elucidator-700 dark:text-dark-repulser-400 mr-3 flex cursor-pointer text-3xl"
                    >
                      <path
                        fill="currentColor"
                        d="M11.994 2a10 10 0 1 0 10 10a10 10 0 0 0-10-10Zm3.18 15.152a.705.705 0 0 1-1.002.352l-2.715-2.11l-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989l.01.009l.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23c.012-.23-.361 0-.361 0l-6.473 4.164l-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258Z"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
