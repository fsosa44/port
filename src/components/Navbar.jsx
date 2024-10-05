import React from 'react';
import '../styles/navbar.css'; // Asegúrate de crear este archivo CSS

const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Aquí puedes poner tu logo si tienes uno */}
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item" onClick={() => scrollToSection('h1-about')}>Sobre mí</li>
        <li className="navbar-item" onClick={() => scrollToSection('projects-section')}>Proyectos</li>
        <li className="navbar-item" onClick={() => scrollToSection('skills-section')}>Skills</li>
        <li className="navbar-item" onClick={() => scrollToSection('contact-section')}>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;