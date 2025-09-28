import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FiChevronDown } from "react-icons/fi";

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

  const languages = [
    { code: "af", name: "Afrikaans" },
    { code: "sq", name: "Albanian" },
    { code: "ar", name: "Arabic" },
    { code: "bn", name: "Bengali" },
    { code: "zh-CN", name: "Chinese (Simplified)" },
    { code: "zh-TW", name: "Chinese (Traditional)" },
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "hi", name: "Hindi" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "ru", name: "Russian" },
    { code: "es", name: "Spanish" },
    { code: "ta", name: "Tamil" },
    { code: "te", name: "Telugu" },
    { code: "tr", name: "Turkish" },
    { code: "ur", name: "Urdu" },
    { code: "vi", name: "Vietnamese" },
  ];

  const translateText = async () => {
    if (!text.trim() || !targetLang) return;
    setLoading(true);
    setTranslatedText("");

    try {
      const res = await axios.post(
        "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        { from: "en", to: targetLang, text },
        {
          headers: {
            "content-type": "application/json",
            "x-rapidapi-host": "google-translate113.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
          },
        }
      );
      setTranslatedText(res.data.trans || "Translation failed");
    } catch (err) {
      console.error("Translation error:", err);
      setTranslatedText("Error occurred during translation.");
    }
    setLoading(false);
  };

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  const clearAll = () => {
    setText("");
    setTranslatedText("");
    setTargetLang("");
    setSearch("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8">
      <div
        className="rounded-3xl border border-white/20 dark:border-white/10 
        bg-white/5 dark:bg-gray-900/10 
        backdrop-blur-2xl shadow-xl 
        p-6 md:p-10 space-y-6 w-full max-w-3xl"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center text-white">
          🌐 Multi-Language Translator
        </h1>

        {/* Input */}
        <textarea
          rows={5}
          className="w-full p-4 rounded-2xl bg-white/20 dark:bg-gray-800/20 
          text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none"
          placeholder="Type your text here (English)..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Target Language Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Select the language"
              value={
                search ||
                languages.find((l) => l.code === targetLang)?.name ||
                ""
              }
              onChange={(e) => {
                setSearch(e.target.value);
                setDropdownOpen(true);
              }}
              onFocus={() => setDropdownOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !search) {
                  setTargetLang("");
                }
              }}
              className="w-full p-3 rounded-xl bg-white/20 dark:bg-gray-800/20 
              text-gray-900 dark:text-gray-100 placeholder-gray-400 
              focus:outline-none pr-10"
            />
            {/* Toggle button */}
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)} // ✅ toggle
              className="absolute right-3 text-gray-500"
            >
              <FiChevronDown
                className={`transform transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

          {dropdownOpen && (
            <ul
              className="absolute mt-2 w-full max-h-60 overflow-auto rounded-xl 
              bg-white/70 dark:bg-gray-800 backdrop-blur-md shadow-lg z-20"
            >
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang) => (
                  <li
                    key={lang.code}
                    onClick={() => {
                      setTargetLang(lang.code);
                      setSearch("");
                      setDropdownOpen(false);
                    }}
                    className={`px-4 py-2 cursor-pointer rounded-lg transition-colors ${
                      targetLang === lang.code
                        ? "bg-indigo-600 text-white"
                        : "text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {lang.name}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No languages found</li>
              )}
            </ul>
          )}
        </div>

        {/* Translate Button */}
        <button
          onClick={translateText}
          disabled={loading}
          className="w-full py-3.5 rounded-2xl font-semibold 
          bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50"
        >
          {loading ? "Translating..." : "Translate"}
        </button>

        {/* Conditionally Render Clear All Button */}
        {text.trim() && (
          <button
            onClick={clearAll}
            className="w-full py-3.5 rounded-2xl font-semibold 
            bg-red-600 hover:bg-red-700 text-white mt-4"
          >
            Clear All
          </button>
        )}

        {/* Output */}
        {translatedText && (
          <div className="w-full p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 text-lg text-white">
            {translatedText}
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
