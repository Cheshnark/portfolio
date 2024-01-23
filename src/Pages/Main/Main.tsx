import './Main.css';

import { useState } from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Carousel from '../../Components/Carousel/Carousel';
import Accordion from '../../Components/Accordion/Accordion';

const Main = () => {
    const [language, setLanguage] = useState('es')
    
    return (
        <>
        <NavBar />
        <main>
            <section className="front" id='front'>
                <div className="front-container">
                    <h1>Alejandro Rubio Suela</h1>
                    <p>Desarrollador web</p>
                </div>
            </section>
            <section className="about-me" id='about-me'>
                <h2>About me</h2>
                <div className="about-me-content">
                    <Carousel />
                </div>
            </section>
            <section className="techs" id='techs'>
                <div className="techs-content">
                    <h2>Tecnologías</h2>
                    <ul>
                        <li><i className="fa-brands fa-html5"></i> HTML</li>
                        <li><i className="fa-brands fa-css3-alt"></i>CSS</li>
                        <li><i className="devicon-javascript-plain"></i>Javascript</li>
                        <li><i className="devicon-typescript-plain"></i>Typescript</li>
                        <li><i className="devicon-python-plain"></i>Python</li>
                        <li><i className="fa-brands fa-react"></i>React</li>
                        <li><i className="devicon-nextjs-original"></i>Next.js</li>
                        <li><i className="fa-brands fa-git"></i>Git</li>
                        <li><i className="fa-brands fa-node-js"></i>Node.js</li>
                        <li><i className="devicon-mongodb-plain"></i>MongoDB</li>
                    </ul>
                </div>
            </section>
            <section className="proyects" id='proyects'>
                <h2>Proyectos</h2>
                <Accordion />
            </section>
            <section className="contact" id='contact'>
                <h2>Contacto</h2>
                <div className="contact-container">
                    <p>Si quieres saber algo más sobre mí, ofrecerme trabajo o tienes alguna propuesta o proyecto
                        que creas que pueda interesarme, puedes escribirme a</p>
                    <a href="mailto:alejandrorubiosuela@gmail.com"><p><span>alejandrorubiosuela@gmail.com</span></p></a>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/alejandro-rubio-suela/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/Cheshnark" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-github"></i></a>
                    </div>
                </div>
            </section>

        </main>
        </>
    )
}

export default Main;

