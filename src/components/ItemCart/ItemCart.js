import React from 'react';
import { CartContext, useCartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './ItemCart.css';
import borraricono from '../../Assets/img/borraricono.png'

const ItemCart = ({ img, name , price, quantity, id, code}) => {

    const { removeProduct } = useContext(CartContext);

    return (
        
        <div className='cart_detail'>
        <img className='cart_detailImg' style={{width:70 , height:80}} src={img} alt={name} />
            <div className='cart_detailDatos'>
                <p>Título: {name}</p>
                <p>Codigo: DQ{code}</p>
                <p>Cantidad: {quantity}</p>
                <p>Precio:$ {price}</p>
                <p>Subtotal: ${quantity * price}</p>
                <button onClick={() => removeProduct(id)}> <img src={borraricono}></img></button>
            </div>
        </div>
    )
}

export default ItemCart