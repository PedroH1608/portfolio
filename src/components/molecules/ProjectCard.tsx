import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

type Project = {
  title: string;
  dates: string;
  description: string;
  demo?: string;
  stack: string[];
  website?: string;
  source?: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <article
      className={`my-6 w-full sm:w-1/2 2xl:w-2/5 border rounded-xl flex flex-col ${themeConfig[theme].layout.borderColor}`}
    >
      {project.demo ? (
        <img
          src={project.demo}
          alt={`Demo of ${project.title}`}
          className="w-full rounded-t-xl aspect-video object-cover"
        />
      ) : (
        <div
          className={`w-full rounded-t-xl aspect-video ${themeConfig[theme].layout.foregroundColor}`}
        />
      )}
      <div className="p-2 flex flex-col gap-2 2xl:gap-5 grow">
        <h3
          className={`text-lg 2xl:text-xl font-bold ${themeConfig[theme].layout.textColor}`}
        >
          {project.title}
        </h3>
        <span
          className={`text-sm 2xl:text-base ${themeConfig[theme].layout.textColor}`}
        >
          {project.dates}
        </span>
        <p
          className={`text-xs 2xl:text-sm ${themeConfig[theme].layout.textColor}`}
        >
          {project.description}
        </p>
        <div className="mt-auto pt-2 flex flex-col gap-2 2xl:gap-5">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <li
                key={index}
                className={`text-xs ${themeConfig[theme].layout.foregroundColor} ${themeConfig[theme].layout.textColor} rounded-sm px-1.5 py-0.5`}
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            {project.website && (
              <a
                href={project.website}
                className={`${themeConfig[theme].layout.buttonDescriptionColor} ${themeConfig[theme].layout.buttonHoverColor} flex items-center gap-1 p-1.5 rounded-full border ${themeConfig[theme].layout.borderColor} transition-colors duration-200`}
              >
                <img
                  src="/icons/globe.svg"
                  alt="Globe Icon"
                  className="w-4.5"
                />
                <p
                  className={`text-xs 2xl:text-sm ${themeConfig[theme].layout.textColor}`}
                >
                  {t("projects.website")}
                </p>
              </a>
            )}
            <a
              href={project.source}
              className={`${themeConfig[theme].layout.buttonDescriptionColor} ${themeConfig[theme].layout.buttonHoverColor} flex items-center gap-1 p-1.5 rounded-full border ${themeConfig[theme].layout.borderColor} transition-colors duration-200`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub Icon"
                className="w-4"
              />
              <p
                className={`text-xs 2xl:text-sm ${themeConfig[theme].layout.textColor}`}
              >
                {t("projects.source")}
              </p>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
