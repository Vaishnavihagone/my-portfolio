import "../styles/experience.css";
import { FaBriefcase } from "react-icons/fa";

export default function ExperienceSection() {
  return (
    <section id="experience" className="exp-section">
      <div className="exp-header">
        <p className="exp-label">Experience</p>
        <h2 className="exp-heading">Professional Journey</h2>
        <p className="exp-subtitle">
          Bringing ideas to life through scalable, high-performance apps and
          clean architecture.
        </p>
      </div>

      <div className="exp-wrapper">
        <article className="exp-item" data-aos="fade-up">
          <div className="exp-date-badge">
            <FaBriefcase />
            <span className="exp-duration">1.5 Year Experience</span>
          </div>

          <div className="exp-content">
            <h3 className="role">Software Developer</h3>
            <h4 className="company">Scriptimiz Insight LLP</h4>

            <p className="about-role">
              Delivered robust cross-platform mobile and web applications
              utilizing React Native, Expo Router, and reusable UI components to
              enhance user engagement and performance. Led development on
              customer-facing features and optimized backend integration
              workflows.
            </p>

            <ul className="exp-points">
              <li>
                Designed and developed complex modules including Restaurants,
                Dishes, Cart, and Order management to streamline user
                experience.
              </li>
              <li>
                Implemented intuitive search, filtering systems, dynamic
                routing, and modal interfaces improving navigation and
                usability.
              </li>
              <li>
                Collaborated closely with backend engineers integrating RESTful
                APIs built using MySQL, Spring Boot, and MongoDB.
              </li>
              <li>
                Conducted performance optimization, bug fixes, and UI
                enhancements to ensure high-quality, responsive, and fluid
                applications.
              </li>
              <li>
                Actively contributed in agile ceremonies and code reviews
                fostering collaboration and continuous improvement.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
