import Navigation from "./Navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-blue-50">
      <Navigation />
      <main className="pt-16">{children}</main>
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-lavender to-sky-blue bg-clip-text text-transparent">
                Marcian Benedict D
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Full-Stack Developer & CS Engineering Student
              </p>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a
                href="https://www.linkedin.com/in/marcian-benedict-9b1331282/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/MARCIANBENEDICT"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:marciandavid1904@gmail.com"
                className="hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-6 pt-6 text-center text-sm text-gray-600">
            <p>© 2024 Marcian Benedict D. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
