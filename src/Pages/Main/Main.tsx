import './Main.css';
import { useState } from 'react';

import NavBar from '../../Components/NavBar/NavBar';
import Carousel from '../../Components/Carousel/Carousel';

import greenShot from '../../images/green-shot.PNG'; 
import drinkCookShot from '../../images/drink-cook-shot.PNG';
import rocasecaShot from '../../images/rocaseca-shot.PNG';

const Main = () => {

    const changeShow = (e:any) => {
        e.target.nextSibling.classList.toggle("show")
        
    }
    
    return (
        <>
        <NavBar />
        <main>
            <section className="front">
                <div className="front-container">
                    <h1>Alejandro Rubio Suela</h1>
                    <p>Desarrollador web</p>
                </div>
            </section>
            <section className="about-me">
                <h2>About me</h2>
                <div className="about-me-content">
                    <Carousel />
                </div>
            </section>
            <section className="techs">
                <h2>Tecnologías</h2>
                <ul>
                    <li>HTML</li>
                    <li>css</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Git</li>
                    <li>Typescript</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                </ul>
            </section>
            <section className="proyects">
                <h2>Proyectos</h2>
                <div className="proyects-container">
                    <div className="green">
                        <h3 onClick={changeShow}>Green</h3>
                        <div className="expandable">
                            <div className="expandable-img">
                                <a href="https://green-vert.vercel.app/" target="_blank"><img src={greenShot} alt="" /></a>
                            </div>
                            <p>Green fue mi primer proyecto realizado en React y usa la librería Material UI. Es una página
                                 sencilla compuesta por un front y un backend ligeros pensados como página para una
                                  marca o un freelance. Cuenta con un portfolio, un blog y una página principal con un formulario
                                  de contacto.</p>
                        </div>
                    </div>
                    <div className="drink-and-cook">
                        <h3 onClick={changeShow}>Drink & Cook</h3>
                        <div className="expandable">
                            <div className="expandable-img">
                                    <a href="https://drink-cook.vercel.app/" target="_blank"><img src={drinkCookShot} alt="" /></a>
                                </div>
                                <p>En este proyecto junte dos cosas que me gustan (la cerveza y cocinar) para practicar el uso de APIs y
                                     cómo trabajar con ellas desde el backend. Está hecho también en React y en esta ocasión usé vanilla css y
                                     un backend hecho en Express.
                                     <br /><br />
                                     La aplicación permite revisar el catálogo de la cervecera BrewDog y empareja cada cerveza con una receta
                                     que le vaya bien y las instrucciones para prepararla. Las APIs que consume son la de la propia BrewDog y 
                                     la de Tasty para las recetas.</p>
                        </div>
                    </div>
                    <div className="rocaseca">
                        <h3 onClick={changeShow}>Rocaseca</h3>
                        <div className="expandable">
                            <div className="expandable-img">
                                <a href="https://rocaseca.vercel.app/" target="_blank"><img src={rocasecaShot} alt="" /></a>
                            </div>
                            <p>Rocaseca es mi proyecto más ambicioso hasta la fecha. Otra de las cosas que me gusta mucho es la escalada y aquí
                                 quería crear una solución centralizada para mirar el tiempo en las escuelas de escalada (por ahora cercanas a
                                 Madrid) y poder guardar tus favoritas. 
                                 <br /><br />
                                 Hecho con React, vanilla css y un back en Express, Rocaseca consume la API de Accuweather y almacena esa información 
                                 en una base de datos hecha en MongoDB que se actualiza bajo demanda. La app cuenta con un sistema
                                 de registro y login de usuario, recuperación de contraseña, y buscador. 
                                 <br /><br />
                                 Para protejer los sectores de escalada, solo podrás buscarlos si ya los conoces. Si no estás familiarizado con este 
                                 mundo prueba escribiendo "Manzanares el Real" o "Guadalix" en el buscador.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact">
                <h2>Contacto</h2>
                <div className="contact-container">
                    <p>Si quieres saber algo más o tienes alguna propuesta, puedes escribirme a</p>
                    <p><span>alejandrorubiosuela@gmail.com</span></p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/alejandro-rubio-suela/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/Cheshnark" target="_blank"><i className="fa-brands fa-square-github"></i></a>
                    </div>
                </div>
            </section>

        </main>
        </>
    )
}

export default Main;

