import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate full-stack developer and computer science student
              dedicated to creating impactful solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Professional Summary */}
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  A responsible and hardworking person with a good academic
                  record and an interest in lifelong learning.
                </p>
                <p className="leading-relaxed">
                  Responsible, careful, and a team player. Ready to apply my
                  skills and be of use in a professional setup, while learning
                  both personally and technologically in accordance with
                  organizational objectives.
                </p>
                <p className="leading-relaxed">
                  Passionate about full-stack web development, cloud
                  technologies, and innovative solutions that solve real-world
                  problems.
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div
              className="animate-slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Highlights</h2>
              <div className="space-y-4">
                {[
                  "MERN Stack specialist",
                  "Full-stack web development experience",
                  "Cloud computing knowledge (AWS/GCP)",
                  "UI/UX Design awareness",
                  "Strong problem-solving skills",
                  "Team collaboration experience",
                ].map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-lavender/10"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {[
                {
                  school: "Dr. N. G. P Institute Of Technology, Coimbatore",
                  degree: "B.E Computer Science and Engineering",
                  year: "2022-Present",
                  details: "CGPA: 8.63 (Till Sem 6)",
                  color: "from-lavender/20 to-lavender/5",
                },
                {
                  school:
                    "St.Joseph's Matriculation Higher Secondary School, Coimbatore",
                  degree: "HSC Class 12",
                  year: "2021-2022",
                  details: "Percentage: 85.33%",
                  color: "from-mint/20 to-mint/5",
                },
                {
                  school:
                    "St.Joseph's Matriculation Higher Secondary School, Coimbatore",
                  degree: "SSLC Class 10",
                  year: "2019-2020",
                  details: "Percentage: 82.6%",
                  color: "from-sky-blue/20 to-sky-blue/5",
                },
              ].map((education, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl bg-gradient-to-r ${education.color} border border-gray-200 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {education.degree}
                    </h3>
                    <span className="text-sm font-semibold text-primary">
                      {education.year}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">
                    {education.school}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    {education.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-peach/20 to-peach/5 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Interests & Passions</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Web Development",
                "Cloud Computing",
                "IoT & Embedded Systems",
                "UI/UX Design",
                "Open Source",
                "Teaching & Mentoring",
              ].map((interest, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-white rounded-lg border border-gray-200"
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
