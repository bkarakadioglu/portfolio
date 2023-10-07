import patchManager from "@/../public/patchManager.png";
import solotest from "@/../public/solotest.png";
import tpibms from "@/../public/tpibms.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "TPIBMS",
    description:
      "A full stack application that displays Super Lig player data from the database, each team and and player has its own dynamic page where people can comment.",
    tags: ["MongoDB", "Express","React", "NodeJS"],
    link: "https://cs308team40.netlify.app/",
    github: "https://github.com/SU-CS308-22FA/Team-40",
    imageUrl: tpibms,
  },
  {
    title: "Patch Manager",
    description:
      "A backend Java application that automates some product updates in Linux server through ssh",
    tags: ["Java"],
    link: "",
    github: "https://github.com/OrionInnovationTRTech/patchManager",
    imageUrl: patchManager,
  },
  {
    title: "Solo Test",
    description:
      "A website to play Solo Test with a computer generated answer in the console with Depth First Search",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://bkarakadioglu.github.io/solo-test/",
    github: "https://github.com/bkarakadioglu/solo-test",
    imageUrl: solotest,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "C++",
  "Java",
  "Framer Motion"
] as const;
