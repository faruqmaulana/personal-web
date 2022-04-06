export default function Footer() {
  return (
    <>
      <hr className=" w-full border-solid border-black opacity-50 shadow-lg shadow-black" />
      <div className=" bg-zinc-900">
        <div className="container flex justify-center">
          <div className="flex w-full flex-col items-center justify-center shadow-lg lg:max-w-screen-lg">
            <p className="pt-3 text-sm font-bold text-secondary">
              Created by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="text-sky-700"
                href="https://github.com/faruqmaulana"
              >
                Faruq Maulana
              </a>
            </p>
            <p className="mt-2 pb-3 text-sm text-primary1">with deep love 🖤</p>
          </div>
        </div>
      </div>
    </>
  );
}
