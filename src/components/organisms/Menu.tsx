import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Menu() {
  const { t, i18n } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center mb-4">
      <nav
        className={`flex items-center gap-2 ${themeConfig[theme].layout.buttonColor} backdrop-blur-sm border rounded-full p-2 shadow-lg transition-colors duration-500`}
      >
        <a
          href="https://www.linkedin.com/in/pedro-henrique-oliveira-braga/"
          className={`group relative px-4 py-1.5 rounded-full ${themeConfig[theme].layout.buttonHoverColor} transition-colors text-sm`}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn Logo"
            className="w-5"
          />
          <span
            className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 ${themeConfig[theme].layout.buttonDescriptionColor} ${themeConfig[theme].layout.textColor} ${themeConfig[theme].layout.borderColor} text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible border`}
          >
            LinkedIn
          </span>
        </a>
        <a
          href="https://github.com/PedroH1608"
          className={`group relative px-4 py-1.5 rounded-full ${themeConfig[theme].layout.buttonHoverColor} transition-colors text-sm`}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GitHub Icon"
            className="w-5"
          />
          <span
            className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 ${themeConfig[theme].layout.buttonDescriptionColor} ${themeConfig[theme].layout.textColor} ${themeConfig[theme].layout.borderColor} text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible border`}
          >
            GitHub
          </span>
        </a>
        <button
          className={`group relative px-4 py-1.5 rounded-full ${themeConfig[theme].layout.buttonHoverColor} transition-colors text-sm cursor-pointer`}
          onClick={toggleTheme}
        >
          <img
            src={`${themeConfig[theme].icon}`}
            alt="Light Mode Icon"
            className="w-5"
          />
          <span
            className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 ${themeConfig[theme].layout.buttonDescriptionColor} ${themeConfig[theme].layout.textColor} ${themeConfig[theme].layout.borderColor} text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible border`}
          >
            {t("menu.theme")}
          </span>
        </button>
        <div className="relative">
          <button
            onClick={() => setIsLangMenuOpen((prev) => !prev)}
            className={`group relative px-4 py-1.5 rounded-full ${themeConfig[theme].layout.buttonHoverColor} transition-colors text-sm cursor-pointer`}
          >
            <img
              src="/icons/language.svg"
              alt="Language Button"
              className="w-5"
            />
            <span
              className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 ${themeConfig[theme].layout.buttonDescriptionColor} ${themeConfig[theme].layout.textColor} ${themeConfig[theme].layout.borderColor} text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible border`}
            >
              {t("menu.language")}
            </span>
          </button>
          {isLangMenuOpen && (
            <div
              className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 ${themeConfig[theme].layout.buttonDescriptionColor} ${themeConfig[theme].layout.textColor} backdrop-blur-sm border ${themeConfig[theme].layout.borderColor} rounded-lg p-1 shadow-lg flex gap-1`}
            >
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-sm ${themeConfig[theme].layout.buttonHoverColor} rounded-md transition-colors cursor-pointer`}
              >
                <span>English</span>
              </button>
              <button
                onClick={() => changeLanguage("pt-BR")}
                className={`px-3 py-1 text-sm ${themeConfig[theme].layout.buttonHoverColor} rounded-md transition-colors cursor-pointer`}
              >
                <span>Portuguese (Brazil)</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
