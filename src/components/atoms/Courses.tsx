export function Courses() {
  const education = [
    {
      logo: "public/images/unicv_logo.jpeg",
      alt: "UniCV Logo",
      institution: "UniCV - Centro Universitário Cidade Verde",
      course: "Software Analysis and Development",
      period: "January 2025 - January 2027",
    },
    {
      logo: "public/images/devquest_logo.jpeg",
      alt: "DevQuest Logo",
      institution: "DevQuest - Dev em Dobro",
      course: "Front-End and Back-End Development",
      period: "February 2023 - August 2025",
    },
  ];

  return (
    <article className="flex flex-col gap-2">
      <h2 className="text-xl">Education</h2>
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
