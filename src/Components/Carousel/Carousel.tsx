import './Carousel.css';
import { useState, useEffect } from 'react';

import { LanguageProp } from '../../ts/interfaces/props';
import { Language } from '../../ts/interfaces/languageInterfaces';

import texts from '../../assets/json/texts.json'

const Carousel = ({ language }:LanguageProp) => {
    const [showLeft, setShowLeft] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const carousel = document.getElementsByClassName('carousel') as HTMLCollectionOf<Element>;
    const { about } = texts

    const slideLeft = () => {
        carousel[0].scrollLeft = carousel[0].scrollLeft - 300;
        setShowLeft(false);
    };

    const slideRight = () => {
        carousel[0].scrollLeft = carousel[0].scrollLeft + 300;
        setShowLeft(true);
    };

    const handleScroll = () => {
        const currentScrollPos = carousel[0].scrollLeft;
        
        if(currentScrollPos > prevScrollPos){
            setTimeout(() => {
                setShowLeft(true);
            },400)
        } else {
            setTimeout(() => {
                setShowLeft(false);
            },400)
        }
    
        setPrevScrollPos(currentScrollPos);
      }

    useEffect( () => {
        carousel[0].addEventListener('scroll', handleScroll);
    
        return () => carousel[0].removeEventListener('scroll', handleScroll)
      })

    return (
        <div className="main-carousel-container">
            {showLeft && 
            <div className="carousel-icon left" onClick={slideLeft}>
                <i className="fa-solid fa-chevron-left"></i>
            </div>
            }
            <div className="carousel">
                <div className="carousel-item professional">
                    <h3>{about.profesional.title[language as keyof Language]}</h3>
                    <p>{about.profesional.body[language as keyof Language]}</p>
                </div>
                <div className="carousel-item personal">
                        <h3>{about.personal.title[language as keyof Language]}</h3>
                        <p>{about.personal.body[language as keyof Language]}</p>
                    </div>
            </div>
            {!showLeft &&
            <div className="carousel-icon right" onClick={slideRight}>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            }
        </div>
    )
}

export default Carousel;
