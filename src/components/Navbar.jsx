import React from 'react';
import '../styles/navbar.css'; 

const Navbar = () => {

  const scrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = sectionPosition - offset; 

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
   
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item" onClick={() => scrollToSection('h1-about', 660)}>Sobre mí</li>
        <li className="navbar-item" onClick={() => scrollToSection('projects-section', 100)}>Proyectos</li>
        <li className="navbar-item" onClick={() => scrollToSection('skills-section', 100)}>Skills</li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
