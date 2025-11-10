import { useTranslation, Trans } from "react-i18next";
import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Footer() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <section className="flex flex-col items-center text-center px-3 sm:px-12 xl:px-40 pt-8 pb-20 xl:w-2/3 gap-3">
      <div>
        <h2 className={`text-xl mb-2 ${themeConfig[theme].layout.textColor}`}>
          {t("contact.title")}
        </h2>
        <p className={`${themeConfig[theme].layout.textColor}`}>
          <Trans
            i18nKey="contact.message"
            components={{
              1: (
                <a
                  href="mailto:poliveira1608@gmail.com"
                  className={`${themeConfig[theme].layout.accentColor} hover:underline`}
                />
              ),
              2: (
                <a
                  href="https://www.linkedin.com/in/pedro-henrique-oliveira-braga/"
                  className={`${themeConfig[theme].layout.accentColor} hover:underline`}
                />
              ),
            }}
          />
        </p>
      </div>
      <p className={`text-xs ${themeConfig[theme].layout.textColor}`}>
        {t("footer.builtWith")}
      </p>
    </section>
  );
}
