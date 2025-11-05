import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <header className="flex items-center content-center px-40 py-8 gap-8 border-b">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-5xl">{t("about.greeting")}</h1>
        <p className="text-lg text-justify">{t("about.intro")}</p>
      </div>
      <div className="flex items-center w-80">
        <img
          src="./images/pfp.jpg"
          alt="Myself!"
          className="rounded-full border"
        />
      </div>
    </header>
  );
}
