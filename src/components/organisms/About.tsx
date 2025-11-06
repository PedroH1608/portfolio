import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-center px-3 sm:px-12 xl:px-40 py-8 gap-8 2xl:gap-60 border-b">
      <div className="flex flex-col gap-4 2xl:w-1/2">
        <h1 className="font-bold text-2xl sm:text-5xl">{t("about.greeting")}</h1>
        <p className="text-sm sm:text-lg text-justify">{t("about.intro")}</p>
      </div>
      <div className="flex items-center w-65 sm:w-80">
        <img
          src="./images/devquest_logo.jpeg"
          alt="Myself!"
          className="rounded-full border"
        />
      </div>
    </header>
  );
}
