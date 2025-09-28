import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

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
        <h1 className="text-3xl md:text-4xl flex justify-center font-bold dark:text-indigo-400">
          About This Project
        </h1>
        <p className="dark:text-gray-300 text-lg">
          A simple and elegant multi-language translator powered by{" "}
          <span className="font-semibold dark:text-indigo-400">React</span>,{" "}
          <span className="font-semibold dark:text-indigo-400">
            TailwindCSS
          </span>
          , and{" "}
          <span className="font-semibold dark:text-indigo-400">RapidAPI</span>.
        </p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* What is this project */}
          <div
            className="rounded-2xl bg-gray-100 dark:bg-gray-800/40 
            backdrop-blur-lg p-6 shadow-md border border-black/10 dark:border-white/10"
          >
            <h2 className="text-xl font-semibold dark:text-white mb-2">
              What is this project?
            </h2>
            <p className="dark:text-gray-300">
              It’s a multi-language translator where you can type text in
              English and translate it into multiple languages instantly.
            </p>
          </div>

          {/* How it works */}
          <div
            className="rounded-2xl bg-gray-100 dark:bg-gray-800/40 
            backdrop-blur-lg p-6 shadow-md border border-black/10 dark:border-white/10"
          >
            <h2 className="text-xl font-semibold dark:text-white mb-2">
              How does it work?
            </h2>
            <p className="dark:text-gray-300">
              The translator uses Google Translate API through RapidAPI. It
              fetches translations in real time and displays them instantly.
            </p>
          </div>

          {/* Tech stack */}
          <div
            className="rounded-2xl bg-gray-100 dark:bg-gray-800/40 
            backdrop-blur-lg p-6 shadow-md border border-black/10 dark:border-white/10"
          >
            <h2 className="text-xl font-semibold dark:text-white mb-2">
              Tech Stack
            </h2>
            <ul className="dark:text-gray-300 space-y-1">
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
            <h2 className="text-xl font-semibold dark:text-white mb-2">
              Future Plans
            </h2>
            <p className="dark:text-gray-300">
              More features like saving translations, text-to-speech, and
              multi-language input support will be added in future updates.
            </p>
          </div>
        </div>

        {/* Meet the Creator Section */}
        <div
          className="rounded-2xl bg-gray-100 dark:bg-gray-800/40 
          backdrop-blur-lg p-6 mt-6 shadow-md border border-black/10 dark:border-white/10"
        >
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Meet the Creator
          </h2>
          <p className="dark:text-gray-300">
            Hi, I'm{" "}
            <span className="font-semibold dark:text-indigo-500">
              Ashish Kumar
            </span>
            , a passionate web developer who built this multi-language
            translator as a project to explore the power of React and
            TailwindCSS. My goal was to create a clean, simple, and effective
            translation tool to make language learning and communication more
            accessible.
          </p>
          <p className="dark:text-indigo-400 mt-4">
            Feel free to connect with me:
          </p>
          <ul className="dark:text-gray-300 space-y-1 mt-2 flex space-x-4">
            <li>
              <a
                href="https://github.com/Ashish27KUMAR"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500"
              >
                <FaGithub className="hover:text-gray-500" size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ashish-kumar-8059b5302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500"
              >
                <FaLinkedin size={25} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/qr/HF2WZBJI3DMWA1"
                className="hover:text-indigo-500"
              >
                <FaWhatsapp className="hover:text-green-500" size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
