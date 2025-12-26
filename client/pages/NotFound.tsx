import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl animate-fade-in">
          <h1 className="text-7xl font-bold text-transparent bg-gradient-to-r from-lavender to-sky-blue bg-clip-text mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. Let me help you get
            back on track.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-lavender to-primary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
