export function Projects() {
  const projects = [
    {
      video: "public/videos/nextboxd_demo.gif",
      title: "NextBoxd AI",
      dates: "August 2025 - October 2025",
      description:
        "To solve 'decision fatigue' in choosing movies, I built NextBoxd, a full-stack application. I developed a React/TypeScript frontend and a Vercel Serverless Function backend that uses AI and the TMDB API to process text prompts or CSV files. The result is an app that delivers personalized movie recommendations quickly and intelligently.",
      stack: [
        "React",
        "TypeScript",
        "Vercel",
        "AI",
        "TMDB API",
        "TailwindCSS",
        "Node.js",
        "Express",
      ],
    },
    {
      title: "Racing Leagues WIP Project",
      dates: "October 2025 - Present",
      description: "Website for finding and creating sim-racing leagues.",
      stack: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    },
  ];
  return (
    <section className="flex flex-col px-40 py-8 border-b items-center">
      <h2 className="text-xl mb-2">Projects</h2>
      <p className="text-justify text-2xl font-bold">My latest projects</p>
      <figure>
        {projects.map((project, index) => (
          <article key={index} className="my-6">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <span>{project.dates}</span>
            <p className="text-sm">{project.description}</p>
          </article>
        ))}
      </figure>
    </section>
  );
}
