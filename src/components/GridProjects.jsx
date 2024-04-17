import { ProjectItem } from "./ProjectItem";
import "../styles/GridProjects.css";
import p1 from '../public/p1.jpg'
import p2 from '../public/p2.jpg'
import projects from '../mocks/projects'
export function GridProjects() {
  return (
    <div className="container-projects" id="projects">
      <h2>Projects</h2>
      <div className="grid-projects">
        
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}

      </div>
    </div>
  );
}
