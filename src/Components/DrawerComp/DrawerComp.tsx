import './DrawerComp.css'
import {Link} from 'react-router-dom';

const DrawerComp = () => {

    return (
        <div className="drawer-comp">
            <div className="menu">
                <i className="fa-solid fa-x" />
                <div className="drawer-comp__content">
                    <h2 className="title">Menú</h2>
                    <ul>
                        <Link to='/search'>
                            <li>Buscador</li>
                        </Link>
                        
                            <div className="drawer-unlogged">
                            <Link to='/register'>
                                <li>Regístrate</li>
                            </Link>
                            <Link to='/login'>
                                <li>Login</li>
                            </Link>
                        </div>                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DrawerComp;