import "../styles/About.css";
import { ButtonLink } from "./ButtonLink";
import { objs } from "../mocks/linkObj";
import avatar from "../public/sfd.png";
import { EmailCopy } from "./EmailCopy";

export function About() {
  return (
    <div className="container-about" id="about">
      <div className="container-about-image">
        <img src={avatar} alt="image about profile" className="about-image" />
      </div>
      <div className="about-content">
        <h1 className="name">Erik Castillo</h1>
        <strong>Soy Frontend Developer</strong>
        <p>
          Me encanta enfocarme en los detalles con el propósito de proporcionar
          buenas experiencias a los usuarios, adoptando un diseño intuitivo y
          atractivo con una implementación de código excelente.
        </p>

        <EmailCopy />

        <div className="container-contact-links">
          <ButtonLink obj={objs[2]} />
        </div>
      </div>
    </div>
  );
}
