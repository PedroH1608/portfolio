import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

type Course = {
  logo: string;
  alt: string;
  institution: string;
  course: string;
  period: string;
};

type CourseItemProps = {
  course: Course;
};

export function CourseItem({ course }: CourseItemProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-between 2xl:gap-20">
      <div className="flex items-center gap-3">
        <div className="flex items-center w-13">
          <img src={course.logo} alt={course.alt} className="rounded-full" />
        </div>
        <div className="text-sm">
          <h3 className={`${themeConfig[theme].layout.textColor}`}>
            {course.institution}
          </h3>
          <p className={`${themeConfig[theme].layout.textColor}`}>
            {course.course}
          </p>
        </div>
      </div>
      <p
        className={`text-center text-sm xl:text-base ${themeConfig[theme].layout.textColor}`}
      >
        {course.period}
      </p>
    </div>
  );
}
