import type { Lang } from "@/lib/types";

interface LanguageToggleProps {
  currentLang: Lang;
  onToggle: (lang: Lang) => void;
}

export default function LanguageToggle({
  currentLang,
  onToggle,
}: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 print:hidden">
      <button
        onClick={() => onToggle("es")}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          currentLang === "es"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => onToggle("en")}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          currentLang === "en"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        EN
      </button>
    </div>
  );
}
