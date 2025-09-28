import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center px-4 pt-28 mb-6">
      <div
        className="rounded-3xl border border-black/10 dark:border-white/10 
        bg-white/90 dark:bg-gray-900/10
        backdrop-blur-2xl shadow-xl 
        p-6 md:p-10 space-y-6 w-full max-w-4xl text-left transition-colors duration-500"
      >
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          About This Project
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          A simple and elegant multi-language translator powered by{" "}
          <span className="font-semibold text-indigo-700 dark:text-indigo-400">
            React
          </span>
          ,{" "}
          <span className="font-semibold text-indigo-700 dark:text-indigo-400">
            TailwindCSS
          </span>
          , and{" "}
          <span className="font-semibold text-indigo-700 dark:text-indigo-400">
            RapidAPI
          </span>
          .
        </p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* What is this project */}
          <div
            className="rounded-2xl bg-gray-100 dark:bg-gray-800/40 
            backdrop-blur-lg p-6 shadow-md border border-black/10 dark:border-white/10"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              What is this project?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              It’s a multi-language translator where you can type text in
              English and translate it into multiple languages instantly.
            </p>
          </div>

          {/* How it works */}
          <div
            className="rounded-2xl bg-gray-100 dark:bg-gray-800/40 
            backdrop-blur-lg p-6 shadow-md border border-black/10 dark:border-white/10"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              How does it work?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The translator uses Google Translate API through RapidAPI. It
              fetches translations in real time and displays them instantly.
            </p>
          </div>

          {/* Tech stack */}
          <div
            className="rounded-2xl bg-gray-100 dark:bg-gray-800/40 
            backdrop-blur-lg p-6 shadow-md border border-black/10 dark:border-white/10"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Tech Stack
            </h2>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>React</li>
              <li>TailwindCSS</li>
              <li>RapidAPI (Google Translate)</li>
              <li>React Icons</li>
            </ul>
          </div>

          {/* Future Features */}
          <div
            className="rounded-2xl bg-gray-100 dark:bg-gray-800/40 
            backdrop-blur-lg p-6 shadow-md border border-black/10 dark:border-white/10"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Future Plans
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              More features like saving translations, text-to-speech, and
              multi-language input support will be added in future updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
