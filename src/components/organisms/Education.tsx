import { Courses } from "./Courses";
import { Scroll } from "./Scroll";

export function Education() {
  return (
    <section className="flex flex-col px-3 sm:px-12 xl:px-40 py-8 gap-4 2xl:gap-12 border-b w-full">
      <Courses />
      <Scroll />
    </section>
  );
}
