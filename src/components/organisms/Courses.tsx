import { useTranslation } from "react-i18next";
import { CourseItem } from "../molecules/CourseItem";
import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Courses() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const translatedEducation = t("courses.educationList", {
    returnObjects: true,
  }) as {
    course: string;
    period: string;
  }[];

  const staticEducationData = [
    {
      logo: "/images/unicv_logo.jpeg",
      alt: "UniCV Logo",
      institution: "UniCV - Centro Universitário Cidade Verde",
    },
    {
      logo: "/images/devquest_logo.jpeg",
      alt: "DevQuest Logo",
      institution: "DevQuest - Dev em Dobro",
    },
  ];

  const education = translatedEducation.map((translated, index) => ({
    ...translated,
    ...staticEducationData[index],
  }));

  return (
    <article className="flex flex-col gap-2 2xl:gap-5">
      <h2
        className={`text-xl 2xl:text-center ${themeConfig[theme].layout.textColor}`}
      >
        {t("courses.title")}
      </h2>
      <div className="flex flex-col gap-3 2xl:gap-6 2xl:flex-row 2xl:justify-between">
        {education.map((edu, index) => (
          <CourseItem key={index} course={edu} />
        ))}
      </div>
    </article>
  );
}
