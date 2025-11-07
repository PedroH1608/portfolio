import { useContext } from "react";
import { themeConfig } from "./contexts/theme";
import { ThemeContext } from "./contexts/ThemeContext";
import { About } from "./components/organisms/About";
import { Education } from "./components/organisms/Education";
import { Projects } from "./components/organisms/Projects";
import { Footer } from "./components/organisms/Footer";
import { Menu } from "./components/organisms/Menu";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`min-h-screen flex flex-col items-center ${themeConfig[theme].layout.backgroundColor} transition-colors duration-500`}
    >
      <About />
      <Education />
      <Projects />
      <Footer />
      <Menu />
    </main>
  );
}

export default App;
