import './Accordion.css';

import greenShot from '../../assets/images/green-shot.PNG'; 
import drinkCookShot from '../../assets/images/drink-cook-shot.PNG';
import rocasecaShot from '../../assets/images/rocaseca-shot.PNG';
import amplipodShot from '../../assets/images/amplipod-shot.PNG';

const Accordion = () => {
    const changeShow = (e:any) => {
        e.target.nextSibling.classList.toggle('show')
    }
    
    return (
        <div className='proyects-container'>
            <div className='green'>
                <h3 onClick={changeShow}>Green</h3>
                <div className='expandable'>
                    <div className='expandable-img'>
                        <a href='https://green-vert.vercel.app/' target='_blank' rel='noreferrer'><img src={greenShot} alt='Green site screen capture' /></a>
                    </div>
                    <p>Green fue mi primer proyecto realizado en React y usa la librería de componentes Material UI. Es una 
                        app sencilla que cuenta con una página principal, portfolio, blog y un formulario de subscripción. 
                        Cuenta además de con un backend ligero hecho con Express. 
                        <br /><br />
                        La idea era crear una página web para una pequeña
                        empresa o freelance que tuviese todo lo necesario para defender su presencia online.
                    </p>
                </div>
            </div>
            <div className='drink-and-cook'>
                <h3 onClick={changeShow}>Drink & Cook</h3>
                <div className='expandable'>
                    <div className='expandable-img'>
                            <a href='https://drink-cook.vercel.app/' target='_blank' rel='noreferrer'><img src={drinkCookShot} alt='Drink & Cook site screen capture' /></a>
                    </div>
                    <p>En este proyecto junte dos cosas que me gustan (la cerveza y cocinar) para practicar con el uso de APIs y
                         cómo trabajar con ellas desde el backend. Está hecho también en React y en esta ocasión usé vanilla css y
                         un backend hecho en Express.
                         <br /><br />
                         La aplicación permite revisar el catálogo de la cervecera BrewDog y empareja cada cerveza con una receta
                         que le vaya bien y las instrucciones para prepararla. Las APIs que consume son la de la propia BrewDog y 
                         la de Tasty para las recetas.
                    </p>
                </div>
            </div>
            <div className='rocaseca'>
                <h3 onClick={changeShow}>Rocaseca</h3>
                <div className='expandable'>
                    <div className='expandable-img'>
                        <a href='https://rocaseca.vercel.app/' target='_blank' rel='noreferrer'><img src={rocasecaShot} alt='Rocaseca site screen capture' /></a>
                    </div>
                    <p>Rocaseca fue mi primer proyecto 'grande'. Otra de las cosas que me gusta mucho es la escalada y aquí
                         quería crear una solución centralizada para mirar el tiempo en las escuelas de escalada (por ahora cercanas a
                         Madrid) y poder guardar tus favoritas. 
                         <br /><br />
                         Hecho con React, vanilla css y un back en Express, Rocaseca consume la API de Accuweather y almacena esa información 
                         en una base de datos hecha en MongoDB que se actualiza bajo demanda. La app cuenta con un sistema
                         de registro y login de usuario, recuperación de contraseña, y buscador. 
                         <br /><br />
                         Para protejer los sectores de escalada, solo podrás buscarlos si ya los conoces. Si no estás familiarizado con este 
                         mundo prueba escribiendo 'Manzanares el Real' o 'Guadalix' en el buscador.
                    </p>
                </div>
            </div>
            <div className='amplipod'>
                <h3 onClick={changeShow}>Amplipod</h3>
                <div className='expandable'>
                    <div className='expandable-img'>
                        <a href='https://app.amplipod.io' target='_blank' rel='noreferrer'><img src={amplipodShot} alt='Amplipod site screen capture' /></a>
                    </div>
                    <p>
                        Amplipod es el proyecto en el que trabajé dentro de Zeonec. Amplipod es un servicio para podcast que mediante el uspo de IA generativa permite optimizar toda la parte de marketing de los episodios de un podcast.
                         <br /><br />
                         La app permite tanto subir un episodio desde nuestro equipo como encontrarlo mediante un buscador incorporado. Una vez hecho esto, obtendremos tanto la transcripción del episodio como resultados optimizados para marketing (Instagram, Linkedin, keywords, blog...). Además, permite la creación de imágenes relacionadas con el episodio y videos con subtítulos para la promoción del capítulo en redes. 
                         <br /><br />
                         A nivel técnico, algunas de las tecnologías usadas para construir el sitio son: Next.js 13, Express.js, Django, Tailwind o Supabase.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Accordion;