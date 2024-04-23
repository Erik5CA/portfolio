import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import code from "../assets/code.svg";
import demo from "../assets/demo.svg";
import file from "../assets/file.svg";
import cv from "../public/ErikCastilloCV.pdf";

export const objs = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/erik-castillo-b48b12239/",
    icon: linkedin,
    class: "linkedin",
  },
  {
    name: "Github",
    url: "https://github.com/Erik5CA",
    icon: github,
    class: "github",
  },
  {
    name: "Curriculum",
    url: cv,
    icon: file,
    class: "cv",
  },
  {
    name: "Code",
    url: false,
    icon: code,
    class: "code",
  },
  {
    name: "Demo",
    url: false,
    icon: demo,
    class: "demo",
  },
];
