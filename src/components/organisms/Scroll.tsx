import { skills } from "../../data/skills";
import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Scroll() {
  const { theme } = useContext(ThemeContext);

  return (
    <article className="flex flex-col gap-2">
      <h2 className={`text-xl ${themeConfig[theme].layout.textColor}`}>
        Skills
      </h2>
      <div className="flex flex-col justify-center items-center mt-3">
        <div className="max-w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_5%,black_95%,transparent_100%)]">
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
