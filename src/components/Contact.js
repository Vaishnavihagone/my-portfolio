import "../styles/contact.css";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
 
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

// Initialize EmailJS (replace with your service ID)
emailjs.init("s5I7uL0qJALnCkbUN");

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Email validation regex
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error on input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name.trim()) {
      setError("❌ Name is required");
      return;
    }
    if (!formData.email.trim()) {
      setError("❌ Email is required");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError("❌ Please enter a valid email");
      return;
    }
    if (!formData.message.trim()) {
      setError("❌ Message cannot be empty");
      return;
    }
    if (formData.message.trim().length < 10) {
      setError("❌ Message must be at least 10 characters");
      return;
    }

    setLoading(true);

    try {
      // Send via EmailJS
      const result = await emailjs.send("service_aw5l16m", "template_7iy6zw4", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        date: new Date().toLocaleString(),
      });

      if (result.status === 200) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError(
        "❌ Failed to send message. Please try again or contact directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-heading">Contact Me</h2>
      <p className="section-subtitle">
        Let’s collaborate and build something amazing 🚀
      </p>

      <div className="contact-wrapper">
        {/* LEFT CARD - INFO */}
        <div className="contact-card info-card">
          <h3 className="card-title">Let’s Connect</h3>
          <div className="contact-row">
            <FaEnvelope className="icon" />
            <a
              href="mailto:vaishnavihagone2001@gmail.com"
              className="contact-link"
            >
              vaishnavihagone2001@gmail.com
            </a>
          </div>

          <div className="contact-row">
            <FaPhoneAlt className="icon" />
            <a href="tel:+918999317296" className="contact-link">
              +91 8999317296
            </a>
          </div>

          <div className="contact-row">
            <FaMapMarkerAlt className="icon" />
            <p>Wardha, Maharashtra</p>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/vaishnavi-hagone21663821a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/VaishnaviHagone"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
           
          </div>
        </div>

        {/* RIGHT - FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {error && <div className="form-error">{error}</div>}
          {submitted && (
            <div className="form-success">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <textarea
            name="message"
            placeholder="Your Message (min 10 characters)"
            className="textarea"
            rows={6}
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading || submitted}
          >
            {loading
              ? "Sending..."
              : submitted
                ? "✓ Message Sent!"
                : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
