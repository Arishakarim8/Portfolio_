"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./styles/Menu.css"; // Import custom CSS

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container_menu">
        <h1 className="logo">
          <span>P</span>ortfolio
        </h1>

        {/* Menu Icon for Small Screens */}
        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navbar Links */}
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
