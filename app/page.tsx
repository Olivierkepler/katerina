// import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Katterine",
  description: "Welcome to Katterine's personal website",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">hello Katterine</h1>
    </div>
  );
}
