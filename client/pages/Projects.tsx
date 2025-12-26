import Layout from "../components/Layout";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Preventing Accidents on Train Tracks",
      year: "2023-2024",
      description:
        "Designed a smart embedded system to detect obstacles on railway tracks using sensors. Programmed microcontrollers to issue real-time alerts for accident prevention.",
      tech: ["IoT", "Embedded Systems", "Microcontrollers", "Sensors"],
      impact: "Improved railway safety through automated monitoring",
      color: "from-lavender/20 to-lavender/5",
    },
    {
      title: "Crowdsourced Hyperlocal Alert Platform",
      year: "2025-Present",
      description:
        "Built a crowdsourced hyperlocal alert platform to report and track civic issues like power outages, water cuts, and traffic disruptions. Real-time notifications and community validation.",
      tech: ["React.js", "Node.js", "MongoDB", "Firebase", "Google Maps API"],
      impact: "Real-time notifications and map-based visualization",
      color: "from-mint/20 to-mint/5",
    },
    {
      title: "OrphanConnect",
      year: "2024",
      description:
        "Built a cloud-based platform to manage orphanage operations and connect volunteers, donors, and healthcare providers. Enabled donation tracking and volunteer coordination.",
      tech: ["React.js", "Node.js", "MongoDB", "REST APIs"],
      impact:
        "Donation tracking, volunteer coordination, real-time data access",
      color: "from-sky-blue/20 to-sky-blue/5",
    },
    {
      title: "Canteen Rush Management System",
      year: "2024",
      description:
        "Built a multi-module solution with mobile app, kiosk, and wallet-based payment to reduce canteen congestion. QR code ordering and cashless payments.",
      tech: ["Mobile App", "Web App", "QR Code", "Payment Gateway"],
      impact: "Secured Second Place in Campus Modelathon",
      color: "from-peach/20 to-peach/5",
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing my work and technical expertise
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gradient-to-br ${project.color} border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {project.year}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="mb-4 p-3 bg-white/50 rounded-lg border border-gray-200">
                  <p className="text-sm font-medium text-gray-600">
                    <span className="font-bold text-gray-900">Impact:</span>{" "}
                    {project.impact}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={18} /> View Project
                  </a>
                  <a
                    href="https://github.com/MARCIANBENEDICT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-lavender/10 transition-all duration-300"
                  >
                    <Github size={18} /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
