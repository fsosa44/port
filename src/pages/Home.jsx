import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import profilePic from '../styles/profilePic.png'; 
import project1 from '../styles/houseofdev.png';
import project2 from '../styles/fastdelivery.png';
import project3 from '../styles/barcaGame.png';
import '../styles/home.css'; 
import JavaScriptLogo from '../styles/JavaScript-logo.png';
import ReactLogo from '../styles/react-logo.png';
import NextLogo from '../styles/next-logo.png';
import NodeLogo from '../styles/node-logo.png';
import PostgresLogo from '../styles/postgres-logo.png';
import sequelizeLogo from '../styles/sequelize-logo.png';
import ReduxLogo from '../styles/redux-logo.png';
import cssLogo from '../styles/css-logo.png';
import htmlLogo from '../styles/html-logo.png';

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: 'House of Dev',
            image: project1,
            pageLink: 'https://front-pink-beta.vercel.app/',
            codeLink: 'https://github.com/fsosa44/houseOfDev',
        },
        {
            id: 2,
            name: 'Fast Delivery',
            image: project2,
            pageLink: 'https://delivery-front-eight.vercel.app/',
            codeLink: 'https://github.com/fsosa44/fast-delivery-src',
        },
        {
            id: 3,
            name: 'Barca Game',
            image: project3,
            pageLink: 'https://gregarious-entremet-5c511e.netlify.app/',
            codeLink: 'https://github.com/fsosa44/barca-landingPage',
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedProject(null);
    };

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
            <a href="/CV_Francisco_Sosa.pdf" download>
              <button className="button button-outline">Descargar CV</button>
            </a>
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

        <div className="container-columns">
          <div id="about-section" className="about-section">
            <h2 id='h1-about'>Acerca de mí</h2>
            <hr className="divider" />
            <p>
              Soy una persona proactiva, comprometida con el aprendizaje continuo y la mejora de mis habilidades...
            </p>
          </div>

          <div id="projects-section" className="projects-section">
            <hr className="divider" />
            <h2>Proyectos</h2>
          </div>
        </div>
        
        <div className="projects-images">
          {projects.map((project) => (
            <img
              key={project.id}
              src={project.image}
              alt={project.name}
              onClick={() => openModal(project)}
            />
          ))}
        </div>

      
        <div className={`modal ${modalVisible ? 'show' : ''}`}>
          <div className={`modal-content ${modalVisible ? 'show' : ''}`}>
            {selectedProject && (
              <>
                <div className="modal-header">
                  <FaTimes className="close-icon" onClick={closeModal} /> 
                </div>
                <h3 className='project-name'>{selectedProject.name}</h3>
                <button className="button button-outline"
                  onClick={() => window.open(selectedProject.pageLink, '_blank')}
                >
                  Ver Página
                </button>
                <button className="button button-outline"
                  onClick={() => window.open(selectedProject.codeLink, '_blank')}
                >
                  Ver Código en GitHub
                </button>
              </>
            )}
          </div>
        </div>

        <div id="skills-section" className="skills-section">
          <div className="skills-header">
            <h2>Skills</h2>
            <hr className="divider-skills" />
          </div>
          <div className="skills-images">
  <div className="skill-item">
    <img src={JavaScriptLogo} alt="Skill 1" className="js-logo" />
    <p>JavaScript</p>
  </div>
  <div className="skill-item">
    <img src={ReactLogo} alt="Skill 2" />
    <p>React.js</p>
  </div>
  <div className="skill-item">
    <img src={NextLogo} alt="Skill 3" />
    <p>Next.js</p>
  </div>
  <div className="skill-item">
    <img src={NodeLogo} alt="Skill 4" />
    <p>Node.js</p>
  </div>
  <div className="skill-item">
    <img src={PostgresLogo} alt='Skill 5' />
    <p>PostgreSQL</p>
  </div>
  <div className="skill-item">
    <img src={sequelizeLogo} alt="Skill 6" />
    <p>Sequelize.js</p>
  </div>
  <div className="skill-item">
    <img src={htmlLogo} alt="Skill 7" />
    <p>HTML5</p>
  </div>
  <div className="skill-item">
    <img src={cssLogo} alt="Skill 8" />
    <p>CSS3</p>
  </div>
  <div className="skill-item">
    <img src={ReduxLogo} alt="Skill 9" />
    <p>Redux</p>
  </div>
</div>
</div>

      
      </>
    );
};

export default Home;
