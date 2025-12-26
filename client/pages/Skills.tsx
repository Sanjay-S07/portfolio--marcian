import Layout from "../components/Layout";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "from-lavender/20 to-lavender/5",
      skills: ["Java", "Python", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Frontend Technologies",
      color: "from-mint/20 to-mint/5",
      skills: [
        "React.js",
        "Tailwind CSS",
        "JavaScript ES6+",
        "Responsive Design",
        "UI/UX",
      ],
    },
    {
      title: "Backend Technologies",
      color: "from-sky-blue/20 to-sky-blue/5",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Authentication",
      ],
    },
    {
      title: "Databases & Tools",
      color: "from-peach/20 to-peach/5",
      skills: ["MongoDB", "SQL", "Firebase", "GitHub", "VS Code"],
    },
    {
      title: "Frameworks & Libraries",
      color: "from-pink-200/20 to-pink-100/5",
      skills: ["MERN Stack", "React Router", "Mongoose", "Next.js", "Redux"],
    },
    {
      title: "Cloud & DevOps",
      color: "from-yellow-200/20 to-yellow-100/5",
      skills: ["AWS Basics", "GCP Basics", "Firebase", "Deployment", "Git"],
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Technical Skills</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and tools
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <p className="text-gray-700">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Highlight */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-lavender/20 to-sky-blue/20 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Microsoft Certified in Full Stack Development using Python",
                "MERN Stack Web Development Certification",
                "NPTEL Certified – Cloud Computing",
                "HackerRank Skill Certification – Python (Basic)",
              ].map((cert, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-2xl">🏆</div>
                  <p className="text-gray-700 font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
