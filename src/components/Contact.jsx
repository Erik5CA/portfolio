import { objs } from '../mocks/linkObj';
import '../styles/Contact.css'
import { ButtonLink } from './ButtonLink';
import { EmailCopy } from './EmailCopy';

export function Contact() {
  return (
    <div className="container-contact" id="contact">
      <h2>Contacto</h2>
      <p>Si desea construir algo juntos, ponte en contacto conmigo.</p>
      <EmailCopy/>
      <div className="container-contact-links">
        <ButtonLink obj={objs[0]} />
        <ButtonLink obj={objs[1]} />
        {/* <ButtonLink obj={objs[2]} /> */}
      </div>
    </div>
  );
}