import './Main.css';

import { useState } from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Carousel from '../../Components/Carousel/Carousel';
import Accordion from '../../Components/Accordion/Accordion';

import texts from '../../assets/json/texts.json'
import { Language } from '../../ts/interfaces/languageInterfaces';

const Main = () => {
    const [language, setLanguage] = useState('es')
    const { front, techs, projects, contact } = texts

    return (
        <>
            <NavBar language={language} setLanguage={setLanguage} />
            <main>
                <section className="front" id='front'>
                    <div className="front-container">
                        <h1>Alejandro Rubio Suela</h1>
                        <p>{front.subtitle[language as keyof Language]}</p>
                    </div>
                </section>
                <section className="about-me" id='about-me'>
                    <h2>About me</h2>
                    <div className="about-me-content">
                        <Carousel language={language} />
                    </div>
                </section>
                <section className="techs" id='techs'>
                    <div className="techs-content">
                        <h2>{techs.title[language as keyof Language]}</h2>
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
                    <h2>{projects.title[language as keyof Language]}</h2>
                    <Accordion language={language} />
                </section>
                <section className="contact" id='contact'>
                    <h2>{contact.title[language as keyof Language]}</h2>
                    <div className="contact-container">
                        <p>{contact.body[language as keyof Language]}</p>
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

