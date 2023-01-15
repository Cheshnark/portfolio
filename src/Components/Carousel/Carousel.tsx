import './Carousel.css';
import { useState, useEffect } from 'react';

const Carousel = () => {
    const [showLeft, setShowLeft] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const carousel = document.getElementsByClassName('carousel') as HTMLCollectionOf<Element>;

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
                    <h3>Profesional</h3>
                    <p>Soy una persona sobre todo curiosa. Autodidacta en desarrollo web, estoy especializado en React
                         y me manejo con Express en el backend y MongoDB para hacer mis cosas. No soy muy fan de las librerías de
                         componentes ya que por alguna razón me divierte usar CSS vanilla, aunque me apaño con ellas. 
                        <br /><br />
                        Aparte de eso, tengo formación audiovisual y un grado en Asia Oriental con especialización en China.
                    </p>
                </div>
                <div className="carousel-item personal">
                        <h3>Aparte del trabajo</h3>
                        <p>Escalo, toco el bajo, escribo y estudio entre otras cosas. Dos temas que me apasionan y que me 
                            parecen fundamentales para entender al ser humano son el ritual (desde un punto de vista 
                            evolutivo) y la filosofía política.
                            <br /><br />
                            Ahora paso la mayor parte de mi tiempo libre en la roca o estudiando. En la actualidad estoy
                            leyendo sobre ritual, tanto en humanos como en otras especies, las religiones políticas y su 
                            papel en la sociedad. 
                        </p>
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