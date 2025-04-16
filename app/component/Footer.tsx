import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand or Logo */}
          <div className="text-xl font-semibold text-gray-800">
            Katterine<span className="text-blue-600">.</span>
          </div>

          {/* Navigation */}
          <div className="flex space-x-6 text-sm text-gray-600">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/projects">Projects</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <SocialIcon href="https://github.com/yourusername">
              <Github className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/yourusername">
              <Linkedin className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href="mailto:you@example.com">
              <Mail className="w-5 h-5" />
            </SocialIcon>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Katterine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-blue-600 transition">
      {children}
    </Link>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600 transition"
    >
      {children}
    </Link>
  );
}
