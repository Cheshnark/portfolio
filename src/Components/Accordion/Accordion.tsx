import './Accordion.css';

import greenShot from '../../images/green-shot.PNG'; 
import drinkCookShot from '../../images/drink-cook-shot.PNG';
import rocasecaShot from '../../images/rocaseca-shot.PNG';

const Accordion = () => {

    const changeShow = (e:any) => {
        e.target.nextSibling.classList.toggle("show")
        
    }
    
    return (
        <div className="proyects-container">
            <div className="green">
                <h3 onClick={changeShow}>Green</h3>
                <div className="expandable">
                    <div className="expandable-img">
                        <a href="https://green-vert.vercel.app/" target="_blank"><img src={greenShot} alt="" /></a>
                    </div>
                    <p>Green fue mi primer proyecto realizado en React y usa la librería de componentes Material UI. Es una 
                        app sencilla que cuenta con una página principal, portfolio, blog y un formulario de subscripción. 
                        Cuenta además de con un backend ligero hecho con Express. 
                        <br /><br />
                        La idea era crear una página web para una pequeña
                        empresa o freelance que tuviese todo lo necesario para defender su presencia online.</p>
                </div>
            </div>
            <div className="drink-and-cook">
                <h3 onClick={changeShow}>Drink & Cook</h3>
                <div className="expandable">
                    <div className="expandable-img">
                            <a href="https://drink-cook.vercel.app/" target="_blank"><img src={drinkCookShot} alt="" /></a>
                    </div>
                    <p>En este proyecto junte dos cosas que me gustan (la cerveza y cocinar) para practicar con el uso de APIs y
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
    )
};

export default Accordion;