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
  return (
    <div className="flex items-center justify-between 2xl:gap-20">
      <div className="flex items-center gap-3">
        <div className="flex items-center w-13">
          <img src={course.logo} alt={course.alt} className="rounded-full" />
        </div>
        <div className="text-sm">
          <h3>{course.institution}</h3>
          <p>{course.course}</p>
        </div>
      </div>
      <p className="text-center text-sm xl:text-base">{course.period}</p>
    </div>
  );
}
