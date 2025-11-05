import { useTranslation, Trans } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center px-40 pt-8 w-2/3">
      <h2 className="text-xl mb-2">{t("contact.title")}</h2>
      <p className="text-center">
        <Trans
          i18nKey="contact.message"
          components={{
            1: (
              <a
                href="mailto:poliveira1608@gmail.com"
                className="text-blue-500 hover:underline"
              />
            ),
            2: (
              <a
                href="https://www.linkedin.com/in/pedro-henrique-oliveira-braga/"
                className="text-blue-500 hover:underline"
              />
            ),
          }}
        />
      </p>
    </section>
  );
}
