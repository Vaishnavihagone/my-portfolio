import "./../styles/Hero.css";
import profileImage from "../assets/profile.jpeg";

// Import Social Icons from react-icons
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  // Define social links and contact details
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/vaishnavi-hagone21663821a",
    github: "https://github.com/VaishnaviHagone",
    email: "vaishnavihagone2001@gmail.com",
  };

  // Handle resume download with error handling
  const handleResumeDownload = () => {
    const resumePath = `${process.env.PUBLIC_URL || ""}/resume.pdf`;

    try {
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "Vaishnavi-Hagone-Resume.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Failed to download resume. Please try again.");
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero__container">
        {/* LEFT TEXT */}
        <div className="hero__text">
          <h3 className="hero__tag">
            👋 Hi, I'm
            {/* Added a subtle highlight to the tag */}
            <span className="highlight-emoji"></span>
          </h3>

          <h1 className="hero__name">
            Vaishnavi <span>Hagone</span>
          </h1>

          <h2 className="hero__role">
            Software <span>Developer</span>
          </h2>

          <p className="hero__summary">
            Passionate Software Developer who loves building clean, scalable,
            and modern applications. I specialize in creating beautiful UI,
            solving real-world problems, and continuously learning to grow
            professionally.
          </p>

          {/* BUTTONS */}
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View My Work
            </a>
            <button
              className="btn btn--outline"
              onClick={handleResumeDownload}
              style={{
                cursor: "pointer",
                background: "transparent",
                border: "2px solid #6366f1",
                color: "#6366f1",
              }}
            >
              Download Resume
            </button>
          </div>

          {/* SOCIAL LINKS - UNCOMMENTED AND COMPLETED */}
          <div className="hero__socials">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="social-icon" />
            </a>
            <a href={socialLinks.email} aria-label="Send Email">
              <FaEnvelope className="social-icon" />
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div className="hero__photo">
          {/* Enhanced profile image container for better visual appeal */}
          <div className="photo-frame shadow-effect">
            <img src={profileImage} alt="Vaishnavi Profile" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
