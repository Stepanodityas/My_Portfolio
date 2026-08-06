import { Butcherman } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    // bg color
    <main>
      {/* Header */}

      <header className="sticky top-0 z-10 items-center bg-[#111844] px-8 py-4 w-full h-full">
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

      <section className="flex md:flex-row flex-col justify-between px-8 py-28 bg-[#fff3df]">
        <div className="text-gray-700 font-sans font-bold text-6xl py-1.5">
          <span className="text-blue-950">Hi, </span>
          <span className="text-blue-950 hover:text-[#41b5ef] transition-colors duration-200">
            Welcome
          </span>
          <div className="font-light text-[20px] py-3">
            Im Stevano Dityas Nugraha
          </div>
          <div className="flex justify-between items-start text-left">
            <h1 className="flex font-light text-[16px]  ">
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
        <div className="flex justify-between px-8 py-28 ">
          <h1>About Me</h1>
          <p>Stevano Dityas Nugraha</p>
        </div>
      </section>

      <div>
        <div></div>
      </div>
      {/* */}
    </main>
  );
}
