import { Butcherman } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // bg color
    <main>
      {/* Header */}

      <header className="sticky top-0 z-10 items-center bg-[#111844] px-8 py-4 w-full h-full">
        <div className="flex justify-between font-sans text-3xl font-bold tracking-wide">
          <span className="hover:text-amber-400 transition-colors duration-200 -pr-16">
            Stevano
          </span>
          <nav className="flex text-white items-center justify-end gap-8 font-sans sm:text-xl text-sm font-medium">
            <div className="transition-colors duration-200 hover:text-blue-500">
              <Link href="/home">Home</Link>
            </div>
            <div className="transition-colors duration-200 hover:text-blue-500">
              <Link href="/projects">Projects</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}

      <section className="flex md:flex-row flex-col justify-between px-8 py-64 bg-[#EAE0CF]">
        <div className="text-gray-700 font-sans font-bold text-8xl py-1.5 -mt-23">
          <span className="text-gray-900">Hi, </span>
          <span className="text-gray-900 hover:text-[#30aece] transition-colors duration-200">
            Welcome
          </span>
          <div className="font-light text-[20px] py-3">
            Im Stevano Dityas Nugraha
          </div>
          <div className="flex justify-between items-start text-left">
            <h1 className="flex font-light w-4xl ">
              <p className="text-mist-700 text-[20px]">
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
      </section>

      <section className="flex justify-between bg-[#EAE0CF] px-8 py-5">
        <div className="bg-amber-400 px-8 py-5">
          <div className="px-20 py-20 bg-[#fff0d7]">
            <div className="px-7 py-10 text-blue-700 text-5xl">
              About This Page
              <p className="text-[16px] pt-3 mr-5">
                this is going to be a Web where i keep my projects
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* */}
    </main>
  );
}
