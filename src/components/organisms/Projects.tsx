import { useTranslation } from "react-i18next";
import { ProjectCard } from "../molecules/ProjectCard";
import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Projects() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const translatedProjects = t("projects.projectList", {
    returnObjects: true,
  }) as { title: string; dates: string; description: string }[];

  const staticProjectsData = [
    {
      demo: "/images/nextboxd_demo.gif",
      stack: [
        "React",
        "TypeScript",
        "Vercel",
        "OpenRouter AI",
        "TMDB API",
        "TailwindCSS",
        "Node.js",
        "Express",
      ],
      website: "https://nextboxd-ai.vercel.app/",
      source: "https://github.com/PedroH1608/nextboxd-ai",
    },
    {
      stack: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    },
  ];

  const projects = translatedProjects.map((translated, index) => ({
    ...translated,
    ...staticProjectsData[index],
  }));

  return (
    <section
      className={`flex flex-col px-3 sm:px-12 xl:px-40 py-8 border-b ${themeConfig[theme].layout.borderColor} items-center`}
    >
      <h2 className={`text-xl mb-2 ${themeConfig[theme].layout.textColor}`}>
        {t("projects.title")}
      </h2>
      <p
        className={`text-justify text-2xl font-bold ${themeConfig[theme].layout.textColor}`}
      >
        {t("projects.subtitle")}
      </p>
      <figure className="flex flex-col sm:flex-row items-center sm:items-stretch 2xl:justify-center gap-3 2xl:gap-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </figure>
    </section>
  );
}
