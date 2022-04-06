import Image from "next/image";
import profile from "../public/profile.jpeg";
import Layout from "../components/Layout";
//
export default function Home() {
  return (
    <>
      <Layout>
        <div className="container flex min-h-screen items-center justify-center">
          <div className="flex flex-wrap">
            <span className="mx-auto">
              <Image
                src={profile}
                width={250}
                height={250}
                className="rounded-full"
                placeholder="blur"
                quality="100"
                objectFit="cover"
                layout="intrinsic"
              ></Image>
            </span>
            <div className="align-center mx-auto mt-10 flex w-full flex-col items-center text-center text-secondary">
              <h1 className="mb-3 text-lg font-bold md:text-2xl lg:text-2xl">
                {"Hi! I'm Faruq Maulana 👋"}
              </h1>
              <h2 className="mb-5 text-sm font-bold md:text-lg lg:text-lg">
                Frontend Web Developer, 19 years old.
              </h2>
              <hr className="w-full border-solid border-slate-600 opacity-50" />
              <p></p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
