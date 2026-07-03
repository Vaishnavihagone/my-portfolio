import "../styles/footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/vaishnavi-hagone21663821a",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/VaishnaviHagone",
      label: "GitHub",
    },

    {
      icon: <FaEnvelope />,
      url: "mailto:vaishnavihagone2001@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top Section */}
        <div className="footer__top">
          <div className="footer__content">
            {/* Brand */}
            <div className="footer__brand">
              <h3>Portfolio.</h3>
              <p>Creating amazing digital experiences</p>
            </div>

            {/* Quick Links */}
            <div className="footer__links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="footer__socials">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="social-link"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="copyright">
            &copy; {currentYear} Vaishnavi Hagone. All rights reserved.
          </p>
          {/* <p className="built-with">
            Built with <span className="heart">❤️</span> React & Modern Web Technologies
          </p> */}
        </div>
      </div>
    </footer>
  );
}
