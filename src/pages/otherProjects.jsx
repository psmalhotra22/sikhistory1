import { ExternalLink, Globe, Code2, Calendar, User } from "lucide-react";

const OtherProjects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Other Projects
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            A curated selection of platforms built with modern frontend
            technologies, focusing on performance, scalability, and
            user-centered design.
          </p>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-500 p-10">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                EnglishMaster
              </h2>

              <div className="flex items-center gap-6 text-sm text-gray-500 flex-wrap">

                <div className="flex items-center gap-2">
                  <User size={16} />
                  Frontend Development
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  2026
                </div>

                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <Globe size={16} />
                  Live Project
                </div>

              </div>
            </div>

            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Production
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl">
            <strong>EnglishMaster</strong> is a smart and simple platform designed to help you improve your English step by step.
            Whether you're a beginner or looking to boost your confidence, we provide structured lessons, daily practice, vocabulary building, grammar clarity, and real-life conversation skills — all in one place.
            <br/>
            Learn 10 minutes daily. Speak confidently for life.
          </p>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
              Tech Stack
            </h4>

            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                JavaScript(jsx)
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Netlify
              </span>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <Code2 className="text-blue-600 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-800">Modern Architecture</h4>
                <p className="text-sm text-gray-500">
                  Component-based structure ensuring scalability and maintainability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="text-green-600 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-800">Responsive Design</h4>
                <p className="text-sm text-gray-500">
                  Fully optimized for mobile, tablet, and desktop experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ExternalLink className="text-purple-600 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-800">Performance Focused</h4>
                <p className="text-sm text-gray-500">
                  Fast loading times with clean routing and optimized deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {/* Action Button */}
<div className="flex justify-center mt-10">
  <a
    href="https://englishmaster2.netlify.app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-sm tracking-wide hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-md"
  >
    <Globe size={18} />
    Visit Website
  </a>
</div>

        </div>

      </div>
    </div>
  );
};

export default OtherProjects;