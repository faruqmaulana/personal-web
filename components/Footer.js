export default function Footer() {
  return (
    <>
      <hr className=" w-full border-solid border-gray-700 opacity-50 shadow-lg shadow-black" />
      <div className=" bg-primary">
        <div className="container flex justify-center">
          <div className="flex w-full flex-col items-center justify-center lg:max-w-screen-lg">
            <p className="pt-3 text-sm font-bold text-secondary">
              Created by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="text-onhover"
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
