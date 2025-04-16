'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl w-full mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Hi, I’m <span className="text-blue-600">Katterina</span> 👋
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            I’m a creative technologist passionate about web development, design, and building solutions that inspire and empower.
          </p>

          <div className="flex gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-gray-300 rounded-xl text-gray-800 font-medium hover:border-blue-600 hover:text-blue-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right: Image or Illustration */}
        <div className="flex justify-center">
          <Image
            src="/Katterine.png" // Put your image in /public
            alt="Hero Illustration"
            width={500}
            height={500}
            className="w-full max-w-md rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
