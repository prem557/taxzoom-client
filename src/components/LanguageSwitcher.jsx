import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || "en";

  const setLang = (l) => {
    i18n.changeLanguage(l);
    document.documentElement.lang = l;
  };

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-full text-sm ${lng === "en" ? "bg-white shadow font-semibold" : "text-gray-600"}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("hi")}
        className={`px-3 py-1 rounded-full text-sm ${lng === "hi" ? "bg-white shadow font-semibold" : "text-gray-600"}`}
      >
        हिंदी
      </button>
    </div>
  );
}
