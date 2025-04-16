// import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Katterine",
  description: "Explore Katterine’s professional portfolio and latest projects.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white text-gray-900">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Welcome to <span className="text-indigo-600">Katterine’s Portfolio</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg text-gray-600">
        A curated collection of work, ideas, and passions — built with creativity, precision, and purpose.
      </p>
    </main>
  );
}
