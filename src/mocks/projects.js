// List a array the projects, with title, description, image, url and list of tecnologies
// import p1 from "../public/p1.jpg";
import py1 from "../public/proyecto1.png";
import py2 from "../public/proyecto2.jpeg";
import py3 from "../public/proyecto3.jpeg";
import py4 from "../public/proyecto4.jpeg";
import py5 from "../public/proyecto5.webp";
const projects = [
  {
    id: 1,
    title: "Study App",
    description:
      "App para crear grupos de estudio sobre cualquier tema, con la posibilidad de unirte para crear comentrios y ver activiades reciente, cuenta con autenticación de usuarios.",
    image: py1,
    urlCode: "https://github.com/Erik5CA/next-study-app",
    urlDemo: "https://study-app-henna.vercel.app/",
    techs: [
      "Typescript",
      "Html",
      "Tailwind CSS",
      "NEXT.JS",
      "PostgreSQL",
      "Prisma ORM",
    ],
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "App enfocada para dispositivos moviles, adeacuada para mantenerse al tanto del clima en un periodo de 5 días.",
    image: py5,
    urlCode: "https://github.com/Erik5CA/react-app-weather",
    urlDemo: "https://react-app-weather-delta.vercel.app/",
    techs: ["Typescript", "Html", "CSS", "React", "API OpenWeather"],
  },
  {
    id: 3,
    title: "Spotify Search",
    description:
      "App para buscar artistas, ver su discografía y sus canciones, utilizando la API de Spotify.",
    image: py2,
    urlCode: "https://github.com/Erik5CA/Spotify-App",
    urlDemo: "https://erik5ca.github.io/Spotify-App/",
    techs: ["Javascript", "Html", "CSS", "React", "API Spotify"],
  },
  {
    id: 4,
    title: "Where in the World?",
    description:
      "Web para buscar paises, ver informacion sobre ellos, ademas de poder elegir tema obscuro o claro. ",
    image: py3,
    urlCode: "https://github.com/Erik5CA/react-rest-countries",
    urlDemo: "https://erik5ca.github.io/react-rest-countries/",

    techs: ["Javascript", "Html", "CSS", "React"],
  },
  {
    id: 5,
    title: "Tip Calculator",
    description:
      "Web para calcular las propinas deacuerdo a un monto, total de personas y el porcentaje.",
    image: py4,
    urlCode: "https://github.com/Erik5CA/react-tip-calculator",
    urlDemo: "https://erik5ca.github.io/react-tip-calculator/",
    techs: ["Javascript", "Html", "CSS", "React"],
  },
];

export default projects;
