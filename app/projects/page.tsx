import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <main>
      <header className="sticky top-0 z-10 flex mx-2 justify-between items-center w-auto px-8 py-4 drop-shadow-zinc-400 sm:drop-shadow-xl bg-[#EAE0CF] text-black">
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
            className="size-10 transition-all hover:stroke-[#2cb3fc] duration-300"
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

      <section className="bg-[#EAE0CF] flex justify-between px-8 py-20 text-black">
        <div className="flex flex-col md:flex-row items-center mb-50 gap-90 px-8 rounded-xl">
          <div className="flex-1">
            <h2 className="text-5xl md:text-4xl font-extrabold text-[#1a2b4c] italic leading-tight ">
              <span className="hover:text-[#3cc4f6] transition-colors duration-200">
                Homework Scheduler <br /> Website
              </span>
            </h2>
          </div>

          <div className="flex-1 w-full max-w-2xl ">
            <a href="https://penjadwalan-pr-2.vercel.app/">
              <Image
                src="/image/schedule.png"
                alt="Homework Scheduler Website Preview"
                width={700}
                height={355}
                className="rounded-xl w-full hover:shadow-xl transition-all duration-200 hover:-translate-y-2 h-auto object-cover"
                priority
              />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#EAE0CF] flex justify-between px-8 py-20 text-black">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 rounded-xl">
          <div className="flex-1 w-full max-2xl">
            <a href="">
              <Image
                src="/image/ryoss.png"
                alt="Ryo-workshop.png"
                width={700}
                height={355}
                className="rounded-xl w-full hover:shadow-xl transition-all duration-200 hover:-translate-y-2 h-auto object-cover mr-80 ml-10"
                priority
              />
            </a>
          </div>
          <div>
            <a href="">
              <Image
                src="/image/ryosss.png"
                alt="ryo-workshop.png"
                width={400}
                height={355}
                className="rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-2 h-auto object-cover mr-80"
              />
            </a>
          </div>

          <div className="flex-1 w-full max-2xl">
            <h2 className="text-5xl md:text-4xl font-extrabold text-[#1a2b4c] italic leading-tight">
              <span className="hover:text-[#3cc4f6] transition-colors duration-200">
                Ryo's Workshop
                <br /> Website
              </span>
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Header;
