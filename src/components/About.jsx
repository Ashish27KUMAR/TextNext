import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-28 bg-black text-white">
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 p-8 shadow-xl space-y-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-400">
          About This Project
        </h1>
        <p className="text-gray-300 text-lg md:text-xl text-center">
          A simple and elegant multi-language translator powered by{" "}
          <span className="font-semibold text-indigo-400">React</span>,{" "}
          <span className="font-semibold text-indigo-400">TailwindCSS</span>,
          and <span className="font-semibold text-indigo-400">RapidAPI</span>.
        </p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* What is this project */}
          <div className="rounded-2xl bg-gray-800/50 backdrop-blur-md p-6 shadow-lg border border-white/20">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
              What is this project?
            </h2>
            <p className="text-gray-300">
              This project is a multi-language translator where users can input
              text in English and instantly translate it into multiple
              languages. The interface is simple, fast, and user-friendly.
            </p>
          </div>

          {/* How it works */}
          <div className="rounded-2xl bg-gray-800/50 backdrop-blur-md p-6 shadow-lg border border-white/20">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
              How does it work?
            </h2>
            <p className="text-gray-300">
              The app uses the Google Translate API via RapidAPI to fetch
              translations in real-time. As you type, translations appear
              instantly, providing a seamless translation experience.
            </p>
          </div>

          {/* Tech stack */}
          <div className="rounded-2xl bg-gray-800/50 backdrop-blur-md p-6 shadow-lg border border-white/20">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
              Tech Stack
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>React</li>
              <li>TailwindCSS</li>
              <li>RapidAPI (Google Translate)</li>
              <li>React Icons</li>
            </ul>
          </div>

          {/* Future Features */}
          <div className="rounded-2xl bg-gray-800/50 backdrop-blur-md p-6 shadow-lg border border-white/20">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
              Future Plans
            </h2>
            <p className="text-gray-300">
              Future updates will include features such as saving translations,
              text-to-speech functionality, and support for more languages and
              input types.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
