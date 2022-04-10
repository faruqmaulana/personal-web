import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({
  idKey,
  imgsrc,
  projectTitle,
  desc,
  responsive,
  stack,
  children,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        key={imgsrc.blurDataUrl}
        className="flex flex-col items-center justify-center rounded bg-skill-secondary p-5 shadow-lg duration-300 hover:translate-y-1 hover:shadow-lg hover:shadow-black"
      >
        <span
          onClick={() => setShowModal(true)}
          className="hover:cursor-pointer"
          key={imgsrc.blurDataUrl}
        >
          <Image
            src={imgsrc}
            alt={projectTitle}
            layout="intrinsic"
            placeholder="blur"
            quality="100"
            className="rounded-sm"
          ></Image>
        </span>
        <div
          key={imgsrc.src}
          className="flex flex-col items-center text-center"
        >
          <h2 className="mt-3 text-xl font-bold text-secondary">
            {projectTitle}
          </h2>
          <p className="mb-2 text-xs sm:text-sm">{responsive}</p>
          <hr className="mb-3 w-full border-solid border-gray-600" />
          <p className="text-sm md:text-lg lg:text-lg">{desc}</p>
          <div className="mt-3 flex flex-wrap justify-center">
            {stack.map(({ name }) => (
              <>
                <p
                  key={name}
                  className="space mx-1 rounded-lg bg-stack px-3 py-[3px] text-[8px] text-stack-color md:text-xs lg:text-xs"
                >
                  {name}
                </p>
              </>
            ))}
          </div>
          <div
            key={imgsrc.blurDataUrl}
            className="mt-4 flex items-center justify-center"
          >
            {children}
          </div>
        </div>
      </div>
      {showModal && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative my-6 mx-auto w-10/12 max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl ">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-skill-secondary shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid  border-gray-600 p-2">
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-0 text-gray-200 outline-none focus:outline-none sm:p-2 md:p-3"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-x-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="sm:md-6 relative flex-auto p-2 md:p-6">
                  <Image
                    src={imgsrc}
                    alt={projectTitle}
                    layout="intrinsic"
                    placeholder="blur"
                    quality="100"
                    className="rounded-sm"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-60"></div>
        </>
      )}
    </>
  );
}
