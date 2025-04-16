// import Image from "next/image";
import { Metadata } from "next";
import Hero from "./component/Hero";

export const metadata: Metadata = {
  title: "Home | Katterine",
  description: "Explore Katterine’s professional portfolio and latest projects.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 text-center bg-white text-gray-900">
      <Hero />

    
    </main>
  );
}
