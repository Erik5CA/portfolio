import { ButtonLink } from "./ButtonLink";
import { objs } from "../mocks/linkObj";

// TODO: add corrects url for project demo
export function ProjectItem({ project }) {
  return (
    <div className="grid-projects-item">
      <div className="grid-projects-item-image">
        <img src={project.image} alt="" />
      </div>
      <div className="grid-projects-item-content">
        <h3 className="title-project">{project.title}</h3>
        <p>{project.description}</p>
        <div className="container-project-links">
          <ButtonLink obj={objs[3]} url={project.url} />
          <ButtonLink obj={objs[4]} url={project.url} />
        </div>
        <dir className="container-project-techs">
          {project.techs.map((tech, index) => (
            <h4 key={index}>{tech}</h4>
          ))}
        </dir>
      </div>
    </div>
  );
}
