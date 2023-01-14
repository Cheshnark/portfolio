import './DrawerComp.css'
import {HashLink as Hash} from 'react-router-hash-link';
import { useEffect } from 'react';

interface Props {
    shown:boolean
}

const DrawerComp = ({shown}:Props) => {    

    useEffect(() => {
        if(shown){
            const menu = document.querySelector('.menu') as Element;
            menu.classList.add('slide')  
        }
              
    }, [shown])

    return (
        <div className="drawer-comp">
            <div className="menu">
                
                <div className="drawer-comp__content">
                    <div className="title-container">
                        <h2 className="title">Menú</h2>
                        <i className="fa-solid fa-x x-icon" />
                    </div>
                    <ul>                
                        <Hash smooth to='/#about-me' style={{ textDecoration: 'none', color:'black' }}>
                            <li><i className="fa-solid fa-angle-right"></i> Sobre mí</li>
                        </Hash>
                        <Hash smooth to='/#techs' style={{ textDecoration: 'none', color:'black' }}>
                            <li><i className="fa-solid fa-angle-right"></i> Tecnologías</li>
                        </Hash>
                        <Hash smooth to='/#proyects' style={{ textDecoration: 'none', color:'black' }}>
                            <li><i className="fa-solid fa-angle-right"></i> Proyectos</li>
                        </Hash>
                        <Hash smooth to='/#contact' style={{ textDecoration: 'none', color:'black' }}>
                            <li><i className="fa-solid fa-angle-right"></i> Contacto</li>
                        </Hash>                      
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DrawerComp;