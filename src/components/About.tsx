export function About() {
  return (
    <header className="flex items-center content-center px-40 py-8 gap-8 border-b">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-5xl">Hi, I'm Pedro!</h1>
        <p className="text-lg text-justify">
          Full Stack Developer with 2 years' experience building and deploying
          web applications. Proficient in front-end, back-end, and DevOps
          practices. Currently engaged as a freelance developer.
        </p>
      </div>
      <div className="flex items-center w-80">
        <img src="./images/pfp.jpg" alt="Myself!" className="rounded-full"/>
      </div>
    </header>
  );
}
