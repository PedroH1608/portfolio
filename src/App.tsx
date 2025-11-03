import { About } from "./components/About";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";

function App() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <About />
      <Education />
      <Projects />
    </main>
  );
}

export default App;
