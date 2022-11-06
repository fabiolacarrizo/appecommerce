import './Navbar.css'
import logo1 from '../../Assets/img/logo1.jpg'
import CartWidget from '../CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'
import bootstrap from 'bootstrap'

const Navbar = () => {
    return (
        <nav> 
        <div >
    <Link to={'/'}>  <img className='logo' src={logo1} alt=""></img> </Link>
       </div>

       <div className='card_boton'>

<ul class="nav nav-pills">
  <li class="nav-item dropdown">
  <div class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <Link to={'/'} className='boton_nav'> Tienda </Link> </div> 
    <ul class="dropdown-menu">
      <li><Link className='button-categories'  to={'/category/Mujer'}>| Mujer </Link></li>
      <li><Link className='button-categories' to={'/category/Hombre'}>| Hombre </Link></li>
      <li> <Link className='button-categories' to={'/category/infantil'}>| Niños </Link></li>
    </ul>
  </li>
</ul>




        <Link to={'/sucursales'} className='boton_nav'> Sucursales</Link>   
        <Link className='boton_nav' to={'/sobrenosotros'}>Sobre Nosotros</Link>    
        <Link className='boton_nav' to={'/contacto'}>Contacto</Link>  
           
        </div>   
        <CartWidget/>
        </nav>
    )
}

export default Navbar