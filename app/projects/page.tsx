import { Butcherman } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // bg color
    <main>
      <header className="flex justify-between w-auto h-auto px-5 py-50 bg-white">
        <div className="text-black text-7xl font-medium">My Projects</div>
      </header>
    </main>
  );
}
