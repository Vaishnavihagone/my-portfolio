import React, { useState, useEffect } from "react";
import "./../styles/Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("#about");

  // Smooth scrolling and active link update
  const smoothScroll = (e, target) => {
    e.preventDefault();
    setActive(target);
    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Update active link based on scroll position (optional)
  useEffect(() => {
    const sections = ["#about", "#skills", "#projects", "#contact"];
    const onScroll = () => {
      const scrollPos = window.pageYOffset + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav">
      <div className="nav__container">
        {/* Left - Brand */}
        <div className="nav__brand">Portfolio.</div>

        {/* Center - Nav Links */}
        <nav className="nav__links">
          {[
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => smoothScroll(e, href)}
              className={active === href ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right - CTA Button */}
        <button
          className="nav__btn"
          onClick={(e) => smoothScroll(e, "#contact")}
          aria-label="Hire Me"
        >
          Hire Me
        </button>
      </div>
    </header>
  );
}
