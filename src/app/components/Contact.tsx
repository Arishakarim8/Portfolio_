import './styles/Contact.css';

import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const contactInfo = [
  { icon: <MdLocationOn />, title: "Address", description: "123 Tech Street, Karachi, Pakistan", color: "text-blue-600" },
  { icon: <MdPhone />, title: "WhatsApp Contact", description: "+92 123 456 7890", color: "text-green-600" },
  { icon: <MdEmail />, title: "Technical support", description: "arishakarim8@gmail.com", color: "text-red-600" }
];
const socialLinks = [
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/", color: "text-blue-600" },
  { icon: <FaGithub />, href: "https://github.com/Arishakarim8", color: "text-gray-50" },
  { icon: <FaInstagram />, href: "https://instagram.com/arishakarim8", color: "text-pink-600" }
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h1 className="section-title">Get in Touch</h1>
        <div className="grid-container">
          <div className="contact-form">
            <h2 className="form-title">Send a Message</h2>
            <form className="contact-form-fields">
              <div className="form-inputs">
                <input type="text" placeholder="Your Name" className="input-field" required />
                <input type="email" placeholder="Your Email" className="input-field" required />
              </div>
              <textarea placeholder="Your Message" rows={5} className="input-field" required></textarea>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          <div className="info-section">
            <div>
              <h2 className="info-title">Contact Information</h2>
              {contactInfo.map(({ icon, title, description, color }, index) => (
                <div className="info-item" key={index}>
                  <div className="info-icon">
                    {React.cloneElement(icon, { className: `icon ${color}` })}
                  </div>
                  <div className="info-details">
                    <h3>{title}</h3>
                    <p className="info-description">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="social-section">
              <h2 className="social-title">Find Me On</h2>
              <div className="social-icons">
                {socialLinks.map(({ icon, href, color }, index) => (
                  <a key={index} href={href} className={`social-link ${color}`} aria-label={href}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
