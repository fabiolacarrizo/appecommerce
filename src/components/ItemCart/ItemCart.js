import React from 'react';
import { CartContext, useCartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemCart = ({ img, name , price, quantity, id}) => {

    const { removeProduct } = useContext(CartContext);

    return (
        <div className='itemCart'>
            <img style={{width:150 , height:200}} src={img} alt={name} />
            <div>
                <p>Título: {name}</p>
                <p>Cantidad: {quantity}</p>
                <p>Precio:$ {price}</p>
                <p>Subtotal: ${quantity * price}</p>
                <button onClick={() => removeProduct(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart