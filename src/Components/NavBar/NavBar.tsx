import './NavBar.css';
import { useState, useEffect } from 'react';
import { HashLink as Hash } from 'react-router-hash-link';

import { NavBarProps } from '../../ts/interfaces/props';
import { Language } from '../../ts/interfaces/languageInterfaces';

import DrawerComp from '../DrawerComp/DrawerComp';
import texts from '../../assets/json/texts.json'

const NavBar = ({ language, setLanguage }: NavBarProps) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [shown, setShown] = useState(false);
  const [hidden, setHidden] = useState("visible")
  const { nav } = texts

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleClick = () => {
    setShown(!shown);

    if (hidden === "visible") {
      document.body.style.overflow = "hidden";
      setHidden("hidden");
    } else {
      document.body.style.overflow = "visible";
      setHidden("visible");
    };
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  }

  return (
    <nav style={{ visibility: !visible ? 'hidden' : 'visible' }}
      className={`${visible ? 'visible' : 'invisible'}`}>
      <div className="nav-container">
        <Hash smooth to='/#front' style={{ textDecoration: 'none', color: 'black' }}>
          <i className="fa-solid fa-house-chimney-crack"></i>
        </Hash>
        {!shown &&
          <i className="mobile-navigation fa-solid fa-bars" onClick={handleClick} />
        }
        <div className="navigation">
          <ul className="nav-links">
            <Hash smooth to='/#about-me' style={{ textDecoration: 'none', color: 'black' }}><li>About me</li></Hash>
            <Hash smooth to='/#techs' style={{ textDecoration: 'none', color: 'black' }}><li>{nav.tech[language as keyof Language]}</li></Hash>
            <Hash smooth to='/#proyects' style={{ textDecoration: 'none', color: 'black' }}><li>{nav.projects[language as keyof Language]}</li></Hash>
            <Hash smooth to='/#contact' style={{ textDecoration: 'none', color: 'black' }}><li>{nav.contact[language as keyof Language]}</li></Hash>
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
      {shown && (
        <div onClick={handleClick}>
          <div className="div-drawercomp">
            <DrawerComp shown={shown} language={language} setLanguage={setLanguage} />
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar;
