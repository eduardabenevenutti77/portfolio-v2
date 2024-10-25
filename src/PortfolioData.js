import caca from "./assets/projetos/caca.png"
import sampa from "./assets/projetos/sampa.png"
import adivinha from "./assets/projetos/adivinha.png"
import ecommerce from "./assets/projetos/ecommerce.png"
import agl from "./assets/projetos/agl.png"
const header = {
  homepage: "",
  title: "Maria Edª Benevenutti",
};
const about = {
  name: "Maria Edª Benevenutti",
  role: ["FrontEnd Developer", "BackEnd Developer", "Full Stack Developer"],
  description:
    "Apaixonada por frontend, busco constantemente aprimorar minhas habilidades por meio de cursos e projetos, como o desenvolvimento de uma landing page para uma arquiteta e a contribuição no sistema de RH da Weld Vision.",
  resume:
    "https://www.canva.com/design/DAGUbeRD7CY/70wWzB9rD8PPTOzVr6XQdg/edit?utm_content=DAGUbeRD7CY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  social: {
    linkedin: "https://www.linkedin.com/in/maria-eduarda-benevenutti-8aa046238/v",
    github: "https://github.com/eduardabenevenutti77",
  },
};
const projects = [
  {
    name: "Caça-Níquel em C++",
    description:"Projeto desenvolvido para conclusão da matéria de introdução a programação da 1ª fase de Análise e Desenvolvimento de Sistemas.",
    stack: ["C++", "Github", "Vscode"],
    image: caca,
    sourceCode: "https://github.com/eduardabenevenutti77/CacaNiquel",
    // livePreview: "https://yumrun-b81a7.web.app/",
  },
  {
    name: "Sampaio Arquitetura",
    description:"Este projeto foi desenvolvido para apresentar nossos serviços de arquitetura de maneira elegante e profissional, destacando nosso portfólio, depoimentos de clientes e informações de contato.",
    stack: ["HTML", "JS", "CSS", "Github", "Vscode"],
    image: sampa,
    sourceCode: "https://github.com/eduardabenevenutti77/sampaio_arq",
    // livePreview: "https://yumrun-b81a7.web.app/",
  },
  {
    name: "Jogo de adivinha - v2",
    description:"Jogo de Adivinhação de Valor! Teste suas habilidades e veja se consegue adivinhar o número secreto gerado aleatoriamente.",
    stack: ["HTML", "JS", "CSS", "Github", "Vscode"],
    image: adivinha,
    sourceCode: "https://github.com/eduardabenevenutti77/JogoAdivinha_v2",
    livePreview: "https://eduardabenevenutti77.github.io/JogoAdivinha_v2/frontend/index.html",
  },
  {
    name: "Análise de E-commerce",
    description:"Este projeto visa realizar uma análise comparativa entre duas plataformas de comércio eletrônico populares: Wix e Shopify. A análise abrange dois aspectos principais: retorno sobre o investimento (ROI) e análise PERT das tarefas.",
    stack: ["Python", "Github", "Vscode"],
    image: ecommerce,
    sourceCode: "https://github.com/eduardabenevenutti77/e-commerce",
    livePreview: "https://github.com/eduardabenevenutti77/e-commerce",
  },
  {
    name: "Cadastro de bonificação - AGL <> ZOPU",
    description:"O projeto é para desenvolver um sistema fullstack de gestão de bonificações na empresa AGL, com foco no cadastro e acompanhamento das bonificações dos colaboradores.",
    stack: ["Figma"],
    image: agl,
    livePreview: "https://www.figma.com/design/kFsYTtc7yau2uLay6kwYhU/AGL?node-id=0-1&t=oXLbHAPalDVyNTri-1",
  },
];
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Material UI",
];
const contact = {
  email: "mariaeduardabenevenutti77@gmail.com",
};

export { header, about, projects, skills, contact };
