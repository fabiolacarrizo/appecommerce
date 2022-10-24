import './CartWidget.css'
import iconocarrito from '../../Assets/img/iconocarrito.png'
import { Link } from 'react-router-dom'

const CartWidget = () =>{
 return (

   <Link to={'/Cart'}>
    <div className='cartWidget'>
  <img  src={iconocarrito} alt=""></img>
  <div >
     <p className='contador'>0</p>
  </div>
 </div> 
 </Link>
 )
}


export default CartWidget