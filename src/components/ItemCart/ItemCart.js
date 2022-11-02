import React from 'react';
import { CartContext, useCartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './ItemCart.css'

const ItemCart = ({ img, name , price, quantity, id, code}) => {

    const { removeProduct } = useContext(CartContext);

    return (
        <div className='cart_detail'>
            <img style={{width:150 , height:200}} src={img} alt={name} />
            <div className='cart_detailDatos'>
                <p>Título: {name}</p>
                <p>Codigo: DQ{code}</p>
                <p>Cantidad: {quantity}</p>
                <p>Precio:$ {price}</p>
                <p>Subtotal: ${quantity * price}</p>
                <button onClick={() => removeProduct(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart