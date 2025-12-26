import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Achievements", href: "/achievements" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-lavender to-sky-blue bg-clip-text text-transparent"
          >
            MB
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-lavender/20 hover:text-primary transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/MARCIANBENEDICT"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-lavender to-sky-blue text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-lavender/20 transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/MARCIANBENEDICT"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-3 py-2 rounded-lg bg-gradient-to-r from-lavender to-sky-blue text-white font-medium text-center"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
