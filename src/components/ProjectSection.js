import "./../styles/project.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Tours & Travel App – Trip Planner",
    description:
      "A complete tours & travel booking platform with itinerary builder, booking engine, curated packages, and secure authentication.",
    tags: ["React Native", "Java", "MySQL"],
    imageClass: "project5",
    liveUrl: "https://github.com/VaishnaviHagone/tours-travel-app",
    codeUrl: "https://github.com/VaishnaviHagone/tours-travel-app",
  },
  {
    id: 2,
    title: "SwadNidhi – Restaurant Management App",
    description:
      "End‑to‑end restaurant management platform that lets owners manage branches, menus, dishes, table reservations, and online orders from a single dashboard. Customers can browse dynamic menus with rich images, customize dishes, add items to cart, track orders in real time, and complete payments securely.",
    tags: ["React Native", "Java", "MySQL"],
    imageClass: "project4",
    liveUrl: "https://swadnidhi.scriptimiz.com/",
    codeUrl: "https://github.com/VaishnaviHagone/swadnidhi-app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <p className="section-label">Projects</p>
        <h2 className="projects-title">Featured Work</h2>
        <p className="projects-subtitle">
          Turning ideas into performant, reliable, and visually polished digital
          products.
        </p>
      </div>

      <div className="projects-grid-new">
        {projects.map((project) => (
          <article key={project.id} className="project-card-new">
            <div className={`project-img ${project.imageClass}`} />

            <div className="project-body">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveUrl}
                  className="btn live-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.codeUrl}
                  className="btn code-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
