import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../styles/profilePic.png'; 
import '../styles/home.css'; 

const Home = () => {
    return (
      <>
        <div className="container">
          <div className="profile-picture">
            <img src={profilePic} alt="Perfil" />
          </div>
          <div className="profile-content">
            <h2 className="greeting">Hola, soy</h2>
            <h1 className="name">Francisco Sosa</h1>
            <h2 className="position">Desarrollador Full Stack</h2>
    
            <div className="buttons">
              <button className="button button-outline">Descargar CV</button>
              <button className="button">Información de contacto</button>
            </div>
    
            <div className="icons">
              <a href="https://github.com/fsosa44" className="icon" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} color="#333" />
              </a>
              <a href="https://www.linkedin.com/in/francisco-sosa-5b528a28a/" className="icon" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} color="#333" />
              </a>
            </div>
          </div>
        </div>

        {/* Contenedor para las secciones en dos columnas */}
        <div className="container-columns">
          {/* Sección "Acerca de mí" */}
          <div id="about-section" className="about-section">
            <h2 id='h1-about'>Acerca de mí</h2>
            <hr className="divider" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quia blanditiis tenetur similique. Aspernatur alias fugiat doloremque rem culpa dolorum nobis odit perspiciatis sunt eum adipisci architecto, ipsa reiciendis quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni iste molestiae velit possimus deleniti facere voluptatibus quidem ut sint eveniet aliquam labore dicta omnis dolorum, laudantium eos tenetur expedita?
            </p>
          </div>

          {/* Sección "Proyectos" */}
          <div id="projects-section" className="projects-section">
            <hr className="divider" />
            <h2>Proyectos</h2>
            </div>
          </div>
            <div className="projects-images">
              <img src="https://via.placeholder.com/150" alt="Proyecto 1" />
              <img src="https://via.placeholder.com/150" alt="Proyecto 2" />
              <img src="https://via.placeholder.com/150" alt="Proyecto 3" />
        </div>
      </>
    );
};

export default Home;
