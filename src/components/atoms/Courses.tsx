import { useTranslation } from "react-i18next";

export function Courses() {
  const { t } = useTranslation();

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
    <article className="flex flex-col gap-2">
      <h2 className="text-xl">{t("courses.title")}</h2>
      <div className="flex flex-col gap-3">
        {education.map((edu, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center w-13">
                <img src={edu.logo} alt={edu.alt} className="rounded-full" />
              </div>
              <div className="text-sm">
                <h3>{edu.institution}</h3>
                <p>{edu.course}</p>
              </div>
            </div>
            <p>{edu.period}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
