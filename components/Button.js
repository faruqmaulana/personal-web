export default function Button({ link, desc, children }) {
  return (
    <>
      <button className="mx-1 h-7 w-20 rounded-md bg-button font-bold duration-300 hover:bg-transparent hover:text-onhover md:h-10 md:w-28 lg:h-10 lg:w-28">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center text-xs md:text-base lg:text-base"
        >
          <span className="mr-2">{children}</span>
          {desc}
        </a>
      </button>
    </>
  );
}
