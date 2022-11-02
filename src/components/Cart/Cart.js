import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart.js";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	if (cart.length === 0) {
		return (
			<>
				<p>No hay elementos en el carrito</p>
				<Link to="/">Hacer compras</Link>
			</>
		);
	}

	return (
		<div>
			<div className="card_todoslosproductos">
			{
            cart.map((product) => <ItemCart key={product.id} {...product} />)
            }
           </div>
			<p>total: {totalPrice()}</p>
	
			<Link to='/checkout'>checkout</Link>
			
		</div>
	);
};

export default Cart;