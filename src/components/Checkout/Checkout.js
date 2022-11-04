import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart.js";
import FormCheckout from "../FormCheckout/FormCheckout";


 const Checkout= () =>{
    const { cart, totalPrice } = useCartContext();
	const [loading, setLoading] = useState(false)
	
	const [personalData, setPersonalData] = useState(false)
    
	const [datosCompra, setDatosCompra] = useState({}) 

const completoDatos = (name, tlf, email, checkEmail, direction, directionNumber, cp,location, province, comment) =>{
	setDatosCompra({name, tlf, email, checkEmail, direction, directionNumber, cp,location, province, comment})
	setPersonalData(true)
}




	const order =  {
		buyer: datosCompra,
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
        
        <FormCheckout completoDatos={completoDatos}/>

            <button onClick={handleClick}>Emitir compra</button>
        </div>
    )
 }
 

 export default Checkout