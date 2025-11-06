import { useTranslation, Trans } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center text-center px-3 sm:px-12 xl:px-40 pt-8 pb-20 xl:w-2/3 gap-3">
      <div>
        <h2 className="text-xl mb-2">{t("contact.title")}</h2>
        <p>
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
      </div>
      <p className="text-xs">{t("footer.builtWith")}</p>
    </section>
  );
}
