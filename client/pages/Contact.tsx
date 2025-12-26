import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "../components/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Failed to send email. Please try again.",
        );
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a question or want to work together? I'd love to hear from
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-lavender/20 to-lavender/5 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-slide-in">
              <div className="p-3 bg-white rounded-lg w-fit mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:marciandavid1904@gmail.com"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                marciandavid1904@gmail.com
              </a>
            </div>

            <div
              className="p-6 rounded-2xl bg-gradient-to-br from-mint/20 to-mint/5 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-slide-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="p-3 bg-white rounded-lg w-fit mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:+919442540130"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                +91 9442540130
              </a>
            </div>

            <div
              className="p-6 rounded-2xl bg-gradient-to-br from-sky-blue/20 to-sky-blue/5 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="p-3 bg-white rounded-lg w-fit mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white border border-gray-200 shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            {status === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-800 font-medium">
                  ✓ Thank you! Your message has been sent successfully. I'll get
                  back to you soon!
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                <p className="text-red-800 font-medium">✗ {errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-gradient-to-r from-lavender to-primary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />{" "}
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center mb-4">
                Or connect with me on social media
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/marcian-benedict-9b1331282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-lavender/10 transition-all duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/MARCIANBENEDICT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-mint/10 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
