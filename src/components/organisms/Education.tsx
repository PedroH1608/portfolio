import { Courses } from "./Courses";
import { Scroll } from "./Scroll";
import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Education() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`flex flex-col px-3 sm:px-12 xl:px-40 py-8 gap-4 2xl:gap-12 border-b w-full ${themeConfig[theme].layout.borderColor}`}
    >
      <Courses />
      <Scroll />
    </section>
  );
}
