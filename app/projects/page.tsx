import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <main>
      <header className="sticky top-1 z-10 flex justify-between items-center w-auto px-8 py-4 drop-shadow-zinc-400 sm:drop-shadow-xl bg-[#EAE0CF] text-black">
        <div className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-10"
          >
            <path
              d="M7 12H17M8 8.5C8 8.5 9 9 10 9C11.5 9 12.5 8 14 8C15 8 16 8.5 16 8.5M8 15.5C8 15.5 9 16 10 16C11.5 16 12.5 15 14 15C15 15 16 15.5 16 15.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#000000"
            ></path>
          </svg>
        </div>
        <nav className="flex gap-8 font-dm-sans text-sm sm:text-xl font-medium">
          <div className="transition-colors duration-200 hover:text-blue-500">
            <Link href="/">Home</Link>
          </div>
          <div className="transition-colors duration-200 hover:text-blue-500">
            <Link href="/projects">Projects</Link>
          </div>
        </nav>
      </header>

      <section className="bg-[#EAE0CF] flex justify-between px-8 py-8 pb-40  text-black">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-8 rounded-xl">
          <div className="flex-1">
            <h2 className="text-5xl md:text-4xl font-extrabold text-[#1a2b4c] italic leading-tight ">
              Homework Scheduler <br /> Website
            </h2>
          </div>

          <div className="flex-1 w-full max-w-2xl">
            <Image
              src="/image/schedule.png"
              alt="Homework Scheduler Website Preview"
              width={1300}
              height={675}
              className="rounded-xl shadow-xl w-full h-auto object-cover ml-80"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Header;
