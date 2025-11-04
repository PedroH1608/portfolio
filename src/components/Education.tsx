import { Courses } from "./atoms/Courses";
import { Scroll } from "./atoms/Scroll";

export function Education() {
  return (
    <section className="flex flex-col px-40 py-8 gap-4 border-b w-full">
      <Courses />
      <Scroll />
    </section>
  );
}
