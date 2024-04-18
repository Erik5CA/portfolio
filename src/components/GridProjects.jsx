import { ProjectItem } from "./ProjectItem";
import "../styles/GridProjects.css";
import projects from '../mocks/projects'
export function GridProjects() {
  return (
    <div className="container-projects" id="projects">
      <h2>Proyectos</h2>
      <div className="grid-projects">
        
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}

      </div>
    </div>
  );
}
