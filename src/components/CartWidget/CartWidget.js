import './CartWidget.css'
import iconocarrito from '../../Assets/img/iconocarrito.png'
import { Link } from 'react-router-dom'
import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () =>{
	const { totalProducts } = useCartContext();

 return (

   <Link to={'/Cart'}>
    <div className='cartWidget'>
  <img  src={iconocarrito} alt=""></img>
  <div >
     <p className='contador' > <span>{totalProducts() || ""}</span></p>

  </div>
 </div> 
 </Link>
 )
}


export default CartWidget