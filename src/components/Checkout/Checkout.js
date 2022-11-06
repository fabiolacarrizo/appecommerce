import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


 const Checkout= () =>{
    const { cart, totalPrice, clearCart } = useCartContext();
	const [loading, setLoading] = useState(true)

	const [personalData, setPersonalData] = useState(false)
	const navigate = useNavigate()
    
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
		date: Timestamp.fromDate(new Date())
	} 

	const handleClick = async () => {
		try {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
		clearCart()

setTimeout(() => {
	navigate('/')
}, 2000)
Swal.fire({
	title: "Gracias por su compra",
	text:`Pronto uno de nuestros vendedores se prondra en contacto con usted`,
	icon: "success",
	buttons: true,
	dangerMode: true,
})	
}catch (error) {
	console.log(error)
} finally {
	setLoading(false)
}} 


	if(loading){
		<h4>Cargando...</h4>
	}

    return(
        <div>
            <h1>Finalizar Compra</h1>
        

	 {	 personalData ? 	(<button onClick={handleClick}>Emitir Compra</button>  )  : 
	  (<FormCheckout completoDatos={completoDatos}/>)
	 
    }
        </div>
    )
}
 

 export default Checkout