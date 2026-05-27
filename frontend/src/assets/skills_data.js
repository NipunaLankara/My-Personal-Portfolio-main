import { 
  FaCode, 
  FaReact, 
  FaNodeJs, 
  FaFigma, 
  FaGitAlt, 
  FaGithub, 
  FaJava, 
  FaPython 
} from "react-icons/fa";
import { 
  RiJavascriptFill, 
  RiNextjsFill, 
  RiAngularjsFill, 
  RiTailwindCssFill 
} from "react-icons/ri";
import { 
  SiMongodb, 
  SiTypescript, 
  SiPostman, 
  SiExpress, 
  SiMysql 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiSpringboot } from "react-icons/si"; 


export const skills_data = [
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "JavaScript", icon: RiJavascriptFill },
  { name: "MySQL", icon: SiMysql },
  { name: "HTML & CSS", icon: FaCode },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "Express.js", icon: SiExpress },
];

export const tools_data = [
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "VSCode", icon: VscVscode },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: FaFigma },
];
