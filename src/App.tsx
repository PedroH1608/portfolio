import { About } from "./components/About";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Menu } from "./components/atoms/Menu";

function App() {
  return (
    <main className="min-h-screen flex flex-col bg-background items-center">
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <Menu />
    </main>
  );
}

export default App;
