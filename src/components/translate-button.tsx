"use client";

import { useState, useEffect, useRef } from "react";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "zh-CN", name: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", name: "繁體中文", flag: "🇹🇼" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "da", name: "Dansk", flag: "🇩🇰" },
  { code: "no", name: "Norsk", flag: "🇳🇴" },
  { code: "fi", name: "Suomi", flag: "🇫🇮" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩" },
  { code: "ur", name: "اردو", flag: "🇵🇰" },
  { code: "sw", name: "Kiswahili", flag: "🇰🇪" },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
  { code: "cs", name: "Čeština", flag: "🇨🇿" },
  { code: "ro", name: "Română", flag: "🇷🇴" },
  { code: "hu", name: "Magyar", flag: "🇭🇺" },
  { code: "he", name: "עברית", flag: "🇮🇱" },
];

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay: boolean },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

export function TranslateButton() {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("preferred-lang");
    if (saved) setCurrentLang(saved);

    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );

      if (saved && saved !== "en") {
        const poll = setInterval(() => {
          const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
          if (combo) {
            combo.value = saved;
            combo.dispatchEvent(new Event("change"));
            clearInterval(poll);
          }
        }, 300);
        setTimeout(() => clearInterval(poll), 5000);
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectLanguage(code: string) {
    if (code === "en") {
      // Reset to English
      localStorage.removeItem("preferred-lang");
      setCurrentLang("en");
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.50besthealthinsurance.com;";
      window.location.reload();
    } else {
      localStorage.setItem("preferred-lang", code);
      setCurrentLang(code);
      const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (combo) {
        combo.value = code;
        combo.dispatchEvent(new Event("change"));
      }
    }
    setOpen(false);
  }

  const current = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />
      <div ref={wrapperRef} className="fixed bottom-6 right-6 z-[10000]">
        {/* Dropdown */}
        {open && (
          <div
            className="absolute bottom-14 right-0 w-56 max-h-96 overflow-y-auto rounded-xl border bg-background/95 shadow-xl backdrop-blur-xl"
            style={{
              borderColor: "rgba(59, 130, 246, 0.25)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            }}
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-blue-50 ${
                  lang.code === currentLang ? "bg-blue-50 font-medium text-blue-700" : ""
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.name}</span>
                {lang.code === currentLang && (
                  <span className="ml-auto text-blue-600">&#10003;</span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 rounded-full border px-4 py-2.5 shadow-lg transition-all hover:shadow-xl"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            borderColor: "rgba(59, 130, 246, 0.3)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          }}
          aria-label="Change language"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            <path d="M2 12h20" />
          </svg>
          <span className="text-sm font-medium">{current.flag}</span>
          <span className="text-sm font-medium text-blue-700">
            {current.code.toUpperCase().replace("ZH-CN", "ZH").replace("ZH-TW", "TW")}
          </span>
        </button>
      </div>
    </>
  );
}
