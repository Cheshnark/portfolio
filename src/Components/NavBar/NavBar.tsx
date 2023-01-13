import './NavBar.css';
import { useState, useEffect } from 'react';
import {HashLink as Hash} from 'react-router-hash-link';

import DrawerComp from '../DrawerComp/DrawerComp';

const NavBar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [shown, setShown] = useState(false); 
    const [hidden,setHidden] = useState("visible")

    useEffect( () => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleClick = () => {
        setShown(!shown);
        
        if(hidden === "visible"){
          document.body.style.overflow = "hidden";
          setHidden("hidden");
        }else{
          document.body.style.overflow = "visible";
          setHidden("visible");
        };    
      };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
  
      if(currentScrollPos > prevScrollPos){
        setVisible(false);
      } else {
        setVisible(true);
      }
  
      setPrevScrollPos(currentScrollPos);
    }

    return (
        <nav style={{ visibility: !visible ? 'hidden' : 'visible'}}
            className={`${visible ? 'smooth' : 'invisible'}`}>
            <div className="nav-container">
              <Hash smooth to='/#front' style={{ textDecoration: 'none', color:'black' }}>
                <i className="fa-solid fa-house-chimney-crack"></i>
              </Hash>
              {!shown &&
              <i className="mobile-navigation fa-solid fa-bars" onClick={handleClick} />
              }
              <div className="navigation">
                  <ul className="nav-links">
                    <Hash smooth to='/#about-me' style={{ textDecoration: 'none', color:'black' }}><li>About me</li></Hash>
                      <li>Tecnologías</li>
                      <li>Proyectos</li>
                      <li>Contacto</li>
                  </ul>
              </div>
            </div>
            {shown && (
            <div onClick={handleClick}>
              <div className="div-drawercomp">
                <DrawerComp shown={shown}/>
              </div>
            </div>
          )}
        </nav>
    )
}

export default NavBar;