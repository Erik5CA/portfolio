import { ButtonLink } from "./ButtonLink";
import { objs } from "../mocks/linkObj";
export function ProjectItem({ project }) {
  return (
    <div className="grid-projects-item">
      <div className="grid-projects-item-image">
        <img src={project.image} alt="" />
      </div>
      <div className="grid-projects-item-content">
        <h3 className="title-project">{project.title}</h3>
        <p>
          {project.description}
        </p>
        <div className="container-project-links">
          <ButtonLink obj={objs[2]} />
          <ButtonLink obj={objs[3]} />
        </div>
        <dir className="container-project-techs">
          {project.techs.map((tech) => (
            <h4 key={tech.id}>{tech}</h4>
          ))}
        </dir>
      </div>
    </div>
  );
}
