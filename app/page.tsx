import { Butcherman } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    // bg color
    <main>
      {/* Header */}

      <header className="sticky top-0 z-10 items-center bg-[#778873] px-8 py-4 w-full">
        <div className="flex justify-between font-sans text-3xl font-bold tracking-wide">
          <span className="hover:text-amber-400 transition-colors duration-200">
            Stevano
          </span>
          <nav className="flex text-white items-center justify-end gap-8 font-sans sm:text-xl text-sm font-medium">
            <button className="transition-colors duration-200 hover:text-blue-500">
              Home
            </button>
            <button className="transition-colors duration-200 hover:text-blue-500">
              Projects
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}

      <div className="flex md:flex-row flex-col justify-between px-8 py-28 bg-[#F7F4ED]">
        <div className="text-gray-700 font-sans font-bold text-4xl py-1.5">
          Hi,{" "}
          <span className="hover:text-[#41b5ef] transition-colors duration-200">
            Welcome
          </span>
          <div className="font-light text-[20px] py-3">
            Im Stevano Dityas Nugraha
          </div>
          <div>
            <h1 className="flex font-light text-[20px]">
              <p>
                A{" "}
                <span className="font-bold hover:text-blue-600 transition-colors duration-200">
                  Web developer
                </span>{" "}
                at SMK Telkom Malang, im currently still in the process of
                learning{" "}
                <span className="font-bold hover:text-blue-600 transition-colors duration-200">
                  Next.js
                </span>{" "}
                and other helpful languages for my projects for the future to
                come.
              </p>
            </h1>
          </div>
        </div>
      </div>

      {/* Projects & Container */}

      <div className="w-full px-15 py-7 bg-[#f4ecda]">
        <div className="flex justify-between text-gray-700 font-bold font-sans text-2xl drop-shadow-2xl">
          <h2 className="text-2xl text-gray-700 font-bold font-sans">
            My said Projects
          </h2>
          <button className="text-[16px] rounded-lg text-white bg-mauve-700 hover:text-cyan-300 transition-all lg:shadow-xl duration-200 px-2 hover:-translate-y-1.5 ">
            Idk about this one
          </button>
        </div>
      </div>

      <div className="px-40 py-10 bg-[#f4ecda] grid md:grid-cols-2  grid-cols-2">
        <div className="bg-white rounded-lg drop-shadow-lg hover:-translate-y-4 transition-all duration-200">
          <Image
            className="rounded-lg w-full"
            src="/image/coding-man.jpg"
            alt="codingMan.jpg"
            width={350}
            height={350}
          />
          <div></div>
        </div>
      </div>
    </main>
  );
}
