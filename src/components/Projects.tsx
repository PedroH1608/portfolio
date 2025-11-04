export function Projects() {
  const projects = [
    {
      demo: "public/images/nextboxd_demo.gif",
      title: "NextBoxd AI",
      dates: "August 2025 - October 2025",
      description:
        "NextBoxd AI is an intelligent movie suggestion application. It uses AI (OpenRouter) to provide personalized recommendations based on your prompts or by analyzing uploaded CSV watchlists. It fetches detailed movie info (posters, trailers) from TMDB API.",
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
      title: "Racing Leagues (WIP)",
      dates: "October 2025 - Present",
      description: "Website for finding and creating sim-racing leagues.",
      stack: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    },
  ];
  return (
    <section className="flex flex-col px-40 py-8 border-b items-center">
      <h2 className="text-xl mb-2">Projects</h2>
      <p className="text-justify text-2xl font-bold">My latest projects</p>
      <figure className="flex items-stretch gap-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="my-6 w-1/2 border rounded-xl flex flex-col"
          >
            {project.demo ? (
              <img
                src={project.demo}
                alt={`Demo of ${project.title}`}
                className="w-full rounded-t-xl aspect-video object-cover"
              />
            ) : (
              <div className="w-full rounded-t-xl aspect-video bg-gray-200" />
            )}
            <div className="p-2 flex flex-col gap-2 grow">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <span className="text-sm">{project.dates}</span>
              <p className="text-xs">{project.description}</p>
              <div className="mt-auto pt-2 flex flex-col gap-2">
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
                        src="public/icons/globe.svg"
                        alt="Globe Icon"
                        className="w-4.5"
                      />
                      <p className="text-xs">Website</p>
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
                    <p className="text-xs">Source</p>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </figure>
    </section>
  );
}
