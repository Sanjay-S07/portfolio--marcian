import Layout from "../components/Layout";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Avenza Consulting Services Pvt. Ltd.",
      position: "Intern - Core Banking Transformation",
      period: "07.07.2025 to 20.08.2025",
      description:
        "Contributed to core banking transformations, working with platforms like Temenos Transact, Payments Hub (TPH), and FCM, helping banks modernize systems.",
      highlights: [
        "Banking Systems",
        "Core Banking",
        "Temenos Transact",
        "Payment Hub",
      ],
      color: "from-lavender/20 to-lavender/5",
    },
    {
      company: "Frenzo Technologies",
      position: "Intern - Full Stack Web Development",
      period: "17.07.2024 to 02.08.2024",
      description:
        "Completed a hands-on internship in Full Stack Web Development using Python. Worked on building responsive web applications using HTML, CSS, JavaScript, and backend with Python.",
      highlights: [
        "Full Stack Development",
        "Python",
        "HTML/CSS",
        "JavaScript",
        "Responsive Design",
      ],
      color: "from-mint/20 to-mint/5",
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Internship Experience</h1>
            <p className="text-xl text-gray-600">
              Hands-on experience building real-world solutions
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-lavender to-sky-blue" />

            {/* Experiences */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`md:grid md:grid-cols-2 gap-8 items-center animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex md:justify-end">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-white absolute right-0 top-8 transform translate-x-1/2" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 rounded-2xl bg-gradient-to-br ${exp.color} border border-gray-200 hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-white rounded-lg">
                        <Briefcase size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.company}
                        </h3>
                        <p className="text-primary font-semibold">
                          {exp.position}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 font-medium mb-3">
                      {exp.period}
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-peach/20 to-peach/5 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">
              Leadership & Co-curricular Activities
            </h2>
            <div className="space-y-4">
              {[
                "Organized and led a hands-on workshop on HTML & CSS for peers, guiding participants in building responsive web pages",
                "Balanced academics with event management, successfully leading cultural and technical fests at the college level",
                "Organized and coordinated a college-level coding contest with 150+ participants, managing logistics and problem statements",
                "Member – Indian Society for Technical Education (ISTE) (2023 – Present)",
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/50"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-gray-700">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
