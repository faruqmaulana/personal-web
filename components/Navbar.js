import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <navbar className="fixed flex w-full items-center justify-center bg-transparent bg-primary shadow-lg backdrop-blur-sm ">
        <div className="container">
          <div className="relative flex items-center justify-between lg:mx-auto lg:max-w-screen-lg">
            <div className="px-4">
              <Link href={"/"}>
                <a className="font-extrabold text-secondary">Faruq Maulana</a>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <nav className="rounded-lg bg-opacity-70 py-5 transition duration-300 ease-in-out">
                <ul className="flex text-secondary">
                  <li className="group">
                    <Link href={"/skills"}>
                      <a className="mx-4 font-semibold duration-100 group-hover:text-slate-400">
                        Skills
                      </a>
                    </Link>
                  </li>
                  <li className="group">
                    <a className="font-semibold duration-100 group-hover:text-slate-400">
                      Project
                    </a>
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
