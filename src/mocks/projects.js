// List a array the projects, with title, description, image, url and list of tecnologies
// import p1 from "../public/p1.jpg";
import py1 from "../../public/proyecto1.jpeg";
import py2 from "../../public/proyecto2.jpeg";
import py3 from "../../public/proyecto3.jpeg";
import py4 from "../../public/proyecto4.jpeg";
const projects = [
  {
    id: 1,
    title: "Study App",
    description:
      "App para crear grupos de estudio sobre cualquier tema, con la posibilidad de unirte para crear comentrios y ver activiades reciente, cuenta con autenticación de usuarios.",
    image: py1,
    url: "https://github.com/Erik5CA/django-study-app",
    techs: ["Javascript", "Html", "CSS", "Django", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Spotify Search",
    description:
      "App para buscar artistas, ver su discografía y sus canciones, utilizando la API de Spotify.",
    image: py2,
    url: "https://github.com/Erik5CA/Spotify-App",
    techs: ["Javascript", "Html", "CSS", "React", "API Spotify"],
  },
  {
    id: 3,
    title: "Where in the World?",
    description:
      "Web para buscar paises, ver informacion sobre ellos, ademas de poder elegir tema obscuro o claro. ",
    image: py3,
    url: "https://github.com/Erik5CA/proyectos-frontend/tree/main/02-rest-countries",
    techs: ["Javascript", "Html", "CSS", "React"],
  },
  {
    id: 4,
    title: "Tip Calculator",
    description:
      "Web para calcular las propinas deacuerdo a un monto, total de personas y el porcentaje.",
    image: py4,
    url: "https://github.com/Erik5CA/proyectos-frontend/tree/main/01-tip-calculator",
    techs: ["Javascript", "Html", "CSS", "React"],
  },
];

export default projects;
