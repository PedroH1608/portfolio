import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="flex items-center justify-center pb-22 pt-2">
      <p className="text-xs">{t("footer.builtWith")}</p>
    </footer>
  );
}
