import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { GridProjects } from "./components/GridProjects";
import { ListTecnologies } from "./components/ListTecnologies";
import "./App.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <About />
        <ListTecnologies/>
        <GridProjects />
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
