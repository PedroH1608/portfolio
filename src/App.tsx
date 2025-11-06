import { About } from "./components/organisms/About";
import { Education } from "./components/organisms/Education";
import { Projects } from "./components/organisms/Projects";
import { Footer } from "./components/organisms/Footer";
import { Menu } from "./components/organisms/Menu";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <About />
      <Education />
      <Projects />
      <Footer />
      <Menu />
    </main>
  );
}

export default App;
