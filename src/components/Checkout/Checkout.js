import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart.js";
import FormCheckout from "../FormCheckout/FormCheckout";


 const Checkout= () =>{
    const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
			name: "Fabiola",
			email: "Carrizofabi@gmail.com",
			phone: "123123",
			address: "aveliana",
		},
		items: cart.map((data) => ({
			id: data.id,
			title: data.name,
			price: data.price,
			quantity: data.quantity,
			code: data.code,
			category: data.category,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};


    return(
        <div>
            <h1>Finalizar Compra</h1>
        
        <FormCheckout/>

            <button onClick={handleClick}>Emitir compra</button>
        </div>
    )
 }


 export default Checkout