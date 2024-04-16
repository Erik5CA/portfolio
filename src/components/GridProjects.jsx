import { ProjectItem } from "./ProjectItem";
import "../styles/GridProjects.css";
import p1 from '../public/p1.jpg'
import p2 from '../public/p2.jpg'
export function GridProjects() {
  return (
    <div className="container-projects">
      <h2>Projects</h2>
      <div className="grid-projects">
        
        <ProjectItem image={p1} />
        <ProjectItem image={p1} />
        <ProjectItem image={p1} />
        <ProjectItem image={p2} />

      </div>
    </div>
  );
}
