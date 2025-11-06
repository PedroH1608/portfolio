import { useTranslation } from "react-i18next";

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

  return (
    <article className="my-6 w-full sm:w-1/2 2xl:w-2/5 border rounded-xl flex flex-col">
      {project.demo ? (
        <img
          src={project.demo}
          alt={`Demo of ${project.title}`}
          className="w-full rounded-t-xl aspect-video object-cover"
        />
      ) : (
        <div className="w-full rounded-t-xl aspect-video bg-gray-200" />
      )}
      <div className="p-2 flex flex-col gap-2 2xl:gap-5 grow">
        <h3 className="text-lg 2xl:text-xl font-bold">{project.title}</h3>
        <span className="text-sm 2xl:text-base">{project.dates}</span>
        <p className="text-xs 2xl:text-sm">{project.description}</p>
        <div className="mt-auto pt-2 flex flex-col gap-2 2xl:gap-5">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <li
                key={index}
                className="text-xs bg-gray-300 rounded-sm px-1.5 py-0.5"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            {project.website && (
              <a
                href={project.website}
                className="bg-white flex items-center gap-1 p-1.5 rounded-full border hover:bg-gray-200 transition-all duration-200"
              >
                <img
                  src="/icons/globe.svg"
                  alt="Globe Icon"
                  className="w-4.5"
                />
                <p className="text-xs 2xl:text-sm">{t("projects.website")}</p>
              </a>
            )}
            <a
              href={project.source}
              className="bg-white flex items-center gap-1 p-1.5 rounded-full border hover:bg-gray-200 transition-all duration-200"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub Icon"
                className="w-4"
              />
              <p className="text-xs 2xl:text-sm">{t("projects.source")}</p>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
