import Layout from "../components/Layout";
import { Trophy, Award, Zap } from "lucide-react";

export default function Achievements() {
  const awards = [
    {
      title: "Innovation Award",
      organization: "Karpagam Institute of Technology",
      year: "2022–2023",
      description:
        "Received for developing a tech-driven solution at the Project Expo",
      icon: "🏆",
    },
    {
      title: "Second Place - Campus Modelathon",
      organization: "Dr. N.G.P Institute of Technology",
      year: "2023–2024",
      description: "For creating a Canteen Rush Management System",
      icon: "🥈",
    },
  ];

  const certifications = [
    {
      title: "Microsoft Certified in Full Stack Development using Python",
      issuer: "Microsoft",
      description:
        "Expertise in building scalable web applications using Python, HTML5, CSS3",
      skills: ["Python", "HTML5", "CSS3", "Web Development"],
      color: "from-lavender/20 to-lavender/5",
    },
    {
      title: "MERN Stack Web Development Certification",
      issuer: "Professional Training Institute",
      description:
        "Hands-on training in MongoDB, Express.js, React.js, and Node.js",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
      color: "from-mint/20 to-mint/5",
    },
    {
      title: "NPTEL Certified – Cloud Computing",
      issuer: "NPTEL - IIT",
      description:
        "Knowledge in virtualization, cloud infrastructure, IaaS, PaaS, SaaS",
      skills: ["Cloud Computing", "AWS", "GCP", "Deployment"],
      color: "from-sky-blue/20 to-sky-blue/5",
    },
    {
      title: "HackerRank Skill Certification – Python (Basic)",
      issuer: "HackerRank",
      description:
        "Validated proficiency in Python programming and problem-solving",
      skills: ["Python", "Data Structures", "Algorithms"],
      color: "from-peach/20 to-peach/5",
    },
  ];

  const presentations = [
    "Technical paper presentation at PSG iTech (2024) - Preventing Accidents in Train Tracks",
    "Technical paper presentation at Karpagam College of Engineering (2024) - Preventing Accidents in Train Tracks",
  ];

  const workshops = [
    "Virtual Reality (VR) Technology and Cybersecurity - Bannari Amman Institute of Technology (2023)",
    "UI/UX Design Workshop - Sri Eshwar College of Technology (2023)",
    "Machine Learning - Coimbatore Institute of Technology (2024)",
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">
              Achievements & Certifications
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognition and professional development milestones
            </p>
          </div>

          {/* Awards Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="text-yellow-500" size={32} /> Awards
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-yellow-100/20 to-yellow-50/20 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{award.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {award.organization}
                  </p>
                  <p className="text-sm text-gray-600 font-medium mb-3">
                    {award.year}
                  </p>
                  <p className="text-gray-700">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Zap className="text-blue-500" size={32} /> Certifications
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${cert.color} border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Presentations Section */}
          <div className="mb-20 p-8 rounded-2xl bg-gradient-to-r from-lavender/20 to-mint/20 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-primary" size={28} /> Technical
              Presentations
            </h2>
            <ul className="space-y-4">
              {presentations.map((presentation, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/50"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700">{presentation}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshops Section */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-sky-blue/20 to-peach/20 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Workshops & Seminars</h2>
            <ul className="space-y-4">
              {workshops.map((workshop, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/50"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-sky-blue flex-shrink-0" />
                  <span className="text-gray-700">{workshop}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
