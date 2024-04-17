import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { GridProjects } from "./components/GridProjects";
import { ListTecnologies } from "./components/ListTecnologies";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <About />
        <ListTecnologies/>
        <GridProjects />
      </main>
    </div>
  );
}

export default App;
