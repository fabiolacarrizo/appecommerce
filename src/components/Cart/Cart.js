import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";


const Cart = ()=>{

    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0 ) {
        return(
<>
<h1>Carrito</h1>
<h2>No hay elementos en el carrito</h2>
</>
        );
    }
 

    return(
        <div>
            <h1>Cart</h1>
         {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
         }
            <p>Precio Total={totalPrice()} </p>
        </div>
    )
}

export default Cart