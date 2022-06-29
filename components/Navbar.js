import Link from "next/link";
import { useRouter } from "next/router";
//
export default function Navbar() {
  const router = useRouter().pathname;
  return (
    <>
      <navbar className="fixed z-30 flex w-full items-center justify-center bg-transparent bg-primary shadow-lg backdrop-blur-lg">
        <div className="container">
          <div className="relative flex items-center justify-between lg:mx-auto lg:max-w-screen-lg">
            <div className="px-4">
              <Link href={"/"}>
                <a
                  className={`font-extrabold hover:text-slate-400  ${
                    router === "/" ? "text-slate-400" : "text-secondary"
                  }`}
                >
                  Faruq Maulana
                </a>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <nav className="rounded-lg bg-opacity-70 py-5 transition duration-300 ease-in-out">
                <ul className="flex">
                  <li
                    className={`group px-3 md:px-4 lg:px-4 ${
                      router === "/skills" ? "text-slate-400" : "text-secondary"
                    }`}
                  >
                    <Link href={"/skills"}>
                      <a className=" font-semibold duration-100 group-hover:text-slate-400">
                        Skills
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`group ${
                      router === "/project" ? "text-slate-400" : "text-white"
                    }`}
                  >
                    <Link href={"/project"}>
                      <a className=" font-semibold duration-100 group-hover:text-slate-400">
                        Project
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </navbar>
    </>
  );
}
