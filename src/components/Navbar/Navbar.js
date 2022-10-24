import './Navbar.css'
import logo1 from '../../Assets/img/logo1.jpg'
import CartWidget from '../CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav> 
        <div >
    <Link to={'/'}>  <img className='logo' src={logo1} alt=""></img> </Link>
       </div>
       <div className='card_boton'>
       <Link to={'/'} className='boton_nav'> Tienda </Link>  
        <Link to={'/sucursales'} className='boton_nav'> Sucursales</Link>   
        <Link className='boton_nav' to={'/sobrenosotros'}>Sobre Nosotros</Link>    
        <Link className='boton_nav' to={'/contacto'}>Contacto</Link>  
           
        </div>   
        <CartWidget/>
        </nav>
    )
}

export default Navbar