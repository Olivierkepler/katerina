'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pt-20">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">About Katterine</h1>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Optional profile image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/katterine.png" // replace with your actual image path in /public
            alt="Katterine portrait"
            width={300}
            height={300}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Bio Section */}
        <div className="w-full md:w-2/3">
          <p className="text-lg text-gray-700 mb-4">
            Hello! I’m <strong>Katterine</strong>, a passionate and curious individual who loves exploring the intersection of creativity and technology.
            Whether I’m working on a design, coding a website, or planning my next adventure, I bring my full self to everything I do.
          </p>

          <p className="text-gray-700 mb-4">
            I have experience in modern web technologies and love crafting clean, user-friendly experiences. When I’m not building something new, you’ll find me learning, sketching, or reading.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 list-disc list-inside">
          <li>HTML / CSS</li>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>UI/UX Design</li>
          <li>Figma</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>

      {/* Interests */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Interests</h2>
        <p className="text-gray-700">
          I love traveling, photography, storytelling, and learning about different cultures. I also enjoy working on meaningful projects that inspire, connect, and empower people.
        </p>
      </div>
    </div>
  );
}
