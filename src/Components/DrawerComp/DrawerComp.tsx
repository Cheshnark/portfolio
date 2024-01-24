import './DrawerComp.css'
import { useEffect } from 'react';
import { HashLink as Hash } from 'react-router-hash-link';

import { Language } from '../../ts/interfaces/languageInterfaces';

import { DrawerCompProps } from '../../ts/interfaces/props';
import texts from '../../assets/json/texts.json'

const DrawerComp = ({ shown, language, setLanguage }: DrawerCompProps) => {
    const { drawer } = texts

    useEffect(() => {
        if (shown) {
            const menu = document.querySelector('.menu') as Element;
            menu.classList.add('slide')
        }

    }, [shown])

    return (
        <div className="drawer-comp">
            <div className="menu">
                <div className="drawer-comp__content">
                    <div className="title-container">
                        <h2 className="title">{drawer.title[language as keyof Language]}</h2>
                        <i className="fa-solid fa-x x-icon" />
                    </div>
                    <ul className='drawer-comp__nav-links'>
                        <Hash smooth to='/#about-me' style={{ textDecoration: 'none', color: 'black' }}>
                            <li><i className="fa-solid fa-angle-right"></i> Sobre mí</li>
                        </Hash>
                        <Hash smooth to='/#techs' style={{ textDecoration: 'none', color: 'black' }}>
                            <li><i className="fa-solid fa-angle-right"></i> Tecnologías</li>
                        </Hash>
                        <Hash smooth to='/#proyects' style={{ textDecoration: 'none', color: 'black' }}>
                            <li><i className="fa-solid fa-angle-right"></i> Proyectos</li>
                        </Hash>
                        <Hash smooth to='/#contact' style={{ textDecoration: 'none', color: 'black' }}>
                            <li><i className="fa-solid fa-angle-right"></i> Contacto</li>
                        </Hash>
                        {language === 'es'
                            ? (
                                <button onClick={() => setLanguage('en')}><i className="fa-solid fa-globe" /> EN</button>
                            )
                            : (
                                <button onClick={() => setLanguage('es')}><i className="fa-solid fa-globe" /> ESP</button>
                            )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DrawerComp;