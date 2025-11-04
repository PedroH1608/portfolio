export function Scroll() {
  const skills = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
      alt: "Python",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      alt: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      alt: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original-wordmark.svg",
      alt: "styled-components",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
      alt: "Jest",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
      alt: "AngularJS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
      alt: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
      alt: "PostgreSQL",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
      alt: "Express",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
      alt: "Docker",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg",
      alt: "Prisma",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
      alt: "MongoDB",
    },
  ];

  return (
    <article className="flex flex-col gap-2">
      <h2 className="text-xl">Skills</h2>
      <div className="flex flex-col justify-center items-center mt-3">
        <div className="max-w-4xl inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_5%,black_95%,transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-[infinite-scroll_40s_linear_infinite]">
            {skills.map((skill, index) => (
              <li key={index}>
                <img src={skill.src} alt={skill.alt} className="h-15" />
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-[infinite-scroll_40s_linear_infinite]"
            aria-hidden="true"
          >
            {skills.map((skill, index) => (
              <li key={index}>
                <img src={skill.src} alt={skill.alt} className="h-15" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
