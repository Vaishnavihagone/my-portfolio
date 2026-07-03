import "../styles/skills.css";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiJavascript, SiSpringboot, SiMysql, SiAngular } from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: <FaReact />,
    level: 70,
    description: "Building modern UIs with reusable components.",
  },
  {
    name: "Angular",
    icon: <SiAngular />,
    level: 75,
    description: "High-performance, scalable web apps.",
  },
  {
    name: "React Native",
    icon: <FaReact />,
    level: 70,
    description: "Cross-platform mobile app development.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    level: 60,
    description: "Core frontend scripting language.",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    level: 70,
    description: "Enterprise backend application development.",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    level: 70,
    description: "Database design and optimization.",
  },
  {
    name: "Java",
    icon: <FaJava />,
    level: 80,
    description: "OOP and robust backend systems.",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    level: 90,
    description: "Semantic markup and accessibility.",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    level: 90,
    description: "Responsive design and animations.",
  },
];

export default function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Technical Skills</h2>
      <p className="skills__subtitle">
        Expertise across frontend, backend & design.
      </p>
      <div className="skills__container">
        {skills.map(({ name, icon, level, description }) => (
          <div key={name} className="skill-meter">
            <div className="circle" style={{ "--percent": `${level}%` }}>
              <div className="skill-icon">{icon}</div>
              <div className="skill-level">{level}%</div>
            </div>
            <div className="skill-info">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
