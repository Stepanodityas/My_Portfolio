import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-10 flex justify-between items-center w-auto px-8 py-4 drop-shadow-zinc-400 sm:drop-shadow-xl bg-[#EAE0CF] text-black">
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

      <section className="bg-[#EAE0CF] p-20 justify-center items-center text-center">
        <div className="font-dm-sans font-bold italic text-5xl text-[#253C63] pb-20">
          <h1 className="pb-2">Ryo's Workshop</h1>
          <p className="text-[18px] font-light">Sector : Technology</p>
        </div>
        <div className="flex justify-center">
          <div>
            <Image
              src="/image/ryoss.png"
              alt="ryoss.png"
              width={500}
              height={260}
              className="rounded-2xl transition-all shadow-xl hover:drop-shadow-xl hover:-translate-y-4"
            />
          </div>
          <div className="ml-20">
            <Image
              src="/image/ryosss.png"
              alt="ryosss.png"
              width={500}
              height={250}
              className="rounded-2xl transition-all shadow-xl hover:drop-shadow-xl hover:-translate-y-4"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#EAE0CF] p-20 justify-center items-center text-center">
        <div className="font-dm-sans font-bold italic text-5xl text-[#253C63] pb-20">
          <h1 className="pb-2">ForGum</h1>
          <p className="text-[18px] font-light">Sector : e-commerce</p>
        </div>
        <div className="flex justify-center">
          <div>
            <Image
              src="/image/forgum.png"
              alt="ryoss.png"
              width={500}
              height={260}
              className="rounded-2xl transition-all shadow-xl hover:drop-shadow-xl hover:-translate-y-4"
            />
          </div>
          <div className="ml-20">
            <Image
              src="/image/forgum2.png"
              alt="ryosss.png"
              width={500}
              height={250}
              className="rounded-2xl transition-all shadow-xl hover:drop-shadow-xl hover:-translate-y-4"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#EAE0CF] p-20 justify-center items-center text-center">
        <div className="font-dm-sans font-bold italic text-5xl text-[#253C63] pb-20">
          <h1 className="pb-2">HoScler</h1>
          <p className="text-[18px] font-light">
            Sector : Information Technology
          </p>
        </div>
        <div className="flex justify-center pb-80">
          <div>
            <Image
              src="/image/schedule.png"
              alt="ryoss.png"
              width={500}
              height={260}
              className="rounded-2xl transition-all shadow-xl hover:drop-shadow-xl hover:-translate-y-4"
            />
          </div>
          <div className="ml-20">
            <Image
              src="/image/scho.png"
              alt="ryosss.png"
              width={500}
              height={250}
              className="rounded-2xl transition-all shadow-xl hover:drop-shadow-xl hover:-translate-y-4"
            />
          </div>
        </div>
      </section>
      <div className="bg-[#1D2468] p-20"></div>
    </div>
  );
};
export default Header;
