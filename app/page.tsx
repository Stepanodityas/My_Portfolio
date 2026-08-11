import { Butcherman } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // bg color
    <main>
      {/* Header */}

      <header className="sticky top-0 z-10 items-center bg-[#000000] px-8 py-4 w-full h-full">
        <div className="flex justify-between font-sans text-3xl font-bold tracking-wide">
          <span className="hover:text-amber-400 transition-colors duration-200 -pr-16">
            Stevano
          </span>
          <nav className="flex text-white items-center justify-end gap-8 font-sans sm:text-xl text-sm font-medium">
            <div className="transition-colors duration-200 hover:text-blue-500">
              <Link href="/home">Home</Link>
            </div>
            <button className="transition-colors duration-200 hover:text-blue-500">
              Projects
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}

      <section className="flex md:flex-row flex-col justify-between px-8 py-64 bg-[#fffbf5]">
        <div className="text-gray-700 font-sans font-bold text-8xl py-1.5 -mt-23">
          <span className="text-black">Hi, </span>
          <span className="text-black hover:text-[#41b5ef] transition-colors duration-200">
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

      <section className="flex flex-col justify-between px-6 py-64 pt-24 bg-linear-to-b from-[#fffbf5] to-[#000000] h-64">
        <div className="rounded-2xl bg-[#000000] py-3.5 px-3 mt-72">
          <h1 className="text-5xl text-white font-medium m-2">About Me</h1>
          <p className="text-white w-auto pl-3.5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
            vestibulum mi. Phasellus sed sem id lacus mollis feugiat quis id
            dui. Mauris vulputate massa sit amet porttitor tempus. Sed varius
            sit amet velit non luctus. Suspendisse interdum est metus. Aliquam
            pellentesque, neque nec dictum varius, ipsum diam fermentum mi, ut
            rhoncus dolor mi et dolor. Suspendisse malesuada condimentum
            malesuada.{" "}
          </p>
        </div>

        <section className="flex flex-col justify-between items-end px-6 py-16 bg-[#000000] ">
          <div className="rounded-2xl bg-[#000000] py-3.5 px-3">
            <h1 className="text-5xl text-white font-medium text-right m-2">
              My Role
            </h1>
            <p className="text-white w-auto text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
              vestibulum mi. Phasellus sed sem id lacus mollis feugiat quis id
              dui. Mauris vulputate massa sit amet porttitor tempus. Sed varius
              sit amet velit non luctus. Suspendisse interdum est metus. Aliquam
              pellentesque, neque nec dictum varius, ipsum diam fermentum mi, ut
              rhoncus dolor mi et dolor. Suspendisse malesuada condimentum
              malesuada.{" "}
            </p>
          </div>
        </section>
      </section>
      {/* */}
    </main>
  );
}
