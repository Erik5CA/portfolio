import { ButtonLink } from "./ButtonLink";
import { objs } from "../mocks/linkObj";
export function ProjectItem({ image }) {
  return (
    <div className="grid-projects-item">
      <div className="grid-projects-item-image">
        <img src={image} alt="" />
      </div>
      <div className="grid-projects-item-content">
        <h3>Project 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quasi. Qui, quaerat.
        </p>
        <div className="container-project-links">
          <ButtonLink obj={objs[2]} />
          <ButtonLink obj={objs[3]} />
        </div>
      </div>
    </div>
  );
}
