'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cash Odyssey',
    description:
      'A gamified budgeting web app that teaches personal finance with streaks, levels, and emergency scenarios.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    link: 'https://cashodyssey.app', // update or remove if not live
  },
  {
    title: 'Virtual Try-On',
    description:
      'A web-based virtual fitting room using TensorFlow.js and webcam pose detection for live clothing overlay.',
    tech: ['Next.js', 'TensorFlow.js', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'This professional portfolio site built with modern design principles and smooth animations.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-40">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              {project.link && (
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-blue-600 hover:text-blue-800" />
                </Link>
              )}
            </div>

            <p className="text-gray-700 mt-2 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
