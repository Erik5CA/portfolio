import "../styles/Footer.css";
import { objs } from "../mocks/linkObj";
export function Footer() {
  return (
    <footer className="container-footer">
      <h4>Erik Castillo</h4>
      <div className="footer-icons">
        <a href={objs[0].url} target="_blank" rel="noreferrer">
          <img src={objs[0].icon} alt="" />
        </a>
        <a href={objs[1].url} target="_blank" rel="noreferrer">
          <img src={objs[1].icon} alt="" />
        </a>
      </div>
    </footer>
  );
}
