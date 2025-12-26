import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import Layout from "../components/Layout";

export default function Index() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-Stack Developer & Computer Science Student";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-lavender/20 rounded-full">
                <p className="text-sm font-medium text-primary">
                  Welcome to my portfolio
                </p>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Marcian
                <br />
                <span className="bg-gradient-to-r from-lavender via-primary to-sky-blue bg-clip-text text-transparent">
                  Benedict D
                </span>
              </h1>

              <p className="text-xl text-gray-700 mb-2 h-8">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
                Passionate about building modern web applications with
                cutting-edge technologies. Currently studying Computer Science
                Engineering while crafting full-stack solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-lavender to-primary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get in Touch <ArrowRight size={20} />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-lavender/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={20} /> Resume
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Phone</p>
                  <p className="font-semibold text-gray-900">+91 9442540130</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <p className="font-semibold text-gray-900">
                    marciandavid1904@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Location</p>
                  <p className="font-semibold text-gray-900">
                    Coimbatore, India
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Status</p>
                  <p className="font-semibold text-green-600">
                    Available for Work
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div className="hidden md:flex items-center justify-center animate-float">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-lavender/30 to-sky-blue/30 rounded-3xl blur-3xl" />
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="aspect-square bg-gradient-to-br from-lavender/20 to-sky-blue/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <p className="text-gray-600 font-medium">
                        Building the future
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            By the Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "4+", label: "Projects Completed" },
              { number: "2", label: "Internships" },
              { number: "8.63", label: "CGPA" },
              { number: "4", label: "Certifications" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-lavender/10 to-sky-blue/10 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-lavender to-sky-blue bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-lavender to-primary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Let's Connect
          </Link>
        </div>
      </section>
    </Layout>
  );
}
