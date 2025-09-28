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
    { code: "hy", name: "Armenian" },
    { code: "bn", name: "Bengali" },
    { code: "bs", name: "Bosnian" },
    { code: "ca", name: "Catalan" },
    { code: "hr", name: "Croatian" },
    { code: "cs", name: "Czech" },
    { code: "da", name: "Danish" },
    { code: "nl", name: "Dutch" },
    { code: "en", name: "English" },
    { code: "eo", name: "Esperanto" },
    { code: "et", name: "Estonian" },
    { code: "tl", name: "Filipino" },
    { code: "fi", name: "Finnish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "el", name: "Greek" },
    { code: "gu", name: "Gujarati" },
    { code: "hi", name: "Hindi" },
    { code: "hu", name: "Hungarian" },
    { code: "is", name: "Icelandic" },
    { code: "id", name: "Indonesian" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "jw", name: "Javanese" },
    { code: "km", name: "Khmer" },
    { code: "ko", name: "Korean" },
    { code: "la", name: "Latin" },
    { code: "lv", name: "Latvian" },
    { code: "lt", name: "Lithuanian" },
    { code: "ml", name: "Malayalam" },
    { code: "mr", name: "Marathi" },
    { code: "my", name: "Myanmar (Burmese)" },
    { code: "ne", name: "Nepali" },
    { code: "no", name: "Norwegian" },
    { code: "pl", name: "Polish" },
    { code: "pt", name: "Portuguese" },
    { code: "pa", name: "Punjabi" },
    { code: "ro", name: "Romanian" },
    { code: "ru", name: "Russian" },
    { code: "sr", name: "Serbian" },
    { code: "si", name: "Sinhala" },
    { code: "sk", name: "Slovak" },
    { code: "sl", name: "Slovenian" },
    { code: "es", name: "Spanish" },
    { code: "su", name: "Sundanese" },
    { code: "sv", name: "Swedish" },
    { code: "ta", name: "Tamil" },
    { code: "te", name: "Telugu" },
    { code: "th", name: "Thai" },
    { code: "tr", name: "Turkish" },
    { code: "uk", name: "Ukrainian" },
    { code: "ur", name: "Urdu" },
    { code: "vi", name: "Vietnamese" },
    { code: "cy", name: "Welsh" },
    { code: "xh", name: "Xhosa" },
    { code: "yi", name: "Yiddish" },
    { code: "zu", name: "Zulu" },
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clear text function
  const clearText = () => {
    setText("");
    setTranslatedText("");
    setTargetLang("");
    setSearch("");
  };

  return (
    <div className="min-h-screen flex items-start justify-center px-4 pt-50 bg-black text-white">
      <div
        className="rounded-3xl border border-white/20 bg-white/5 dark:bg-gray-900/10 
        backdrop-blur-2xl shadow-xl p-6 md:p-10 space-y-6 w-full max-w-3xl"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center">
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

        {/* Clear Button */}
        {text && (
          <button
            onClick={clearText}
            className="w-full py-2 mt-4 rounded-2xl font-semibold 
            bg-red-600 hover:bg-red-700 text-white"
          >
            Clear All
          </button>
        )}

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

        {/* Button */}
        <button
          onClick={translateText}
          disabled={loading}
          className="w-full py-3.5 rounded-2xl font-semibold 
          bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50"
        >
          {loading ? "Translating..." : "Translate"}
        </button>

        {/* Output */}
        {translatedText && (
          <div className="p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 text-lg">
            {translatedText}
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
