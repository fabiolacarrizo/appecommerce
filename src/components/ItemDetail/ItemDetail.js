import Counter from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

const ItemDetail = ({id, name, code, category, price, stock, img, description, data}) =>{
  const [goCart, setGoCart] = useState(false);
  const { addItem } = useCartContext();


    
const OnAdd = (quantity) => {
  setGoCart(true);

        const productToAdd = {
            id,
            name,
            price,
            img,
            code,
            category,
            description
        }

        addItem(productToAdd, quantity)
 
    }


  const navigate = useNavigate()

 return(
    <div className="card-detalleItem"> 
    <div className="card-detalleImgVolver">
     <button  className="botonvolver" onClick={() => (navigate(-1)) }>Volver</button>
      <img style={{width:450, height:600}} src={img} alt=""></img>
    </div>

     <div>
      <h3>{name}</h3>
      <h5>Codigo:{code}</h5>
      <h5>Categoria:{category} </h5>
      <h5>Descripcion: {description}</h5>
      <p>${price}</p>
      {
        goCart
        ? ( <p className="botonContador"> <Link className="botonContador" to={'/cart'} >Finalizar Compra</Link></p> )
         : (<Counter onAdd={OnAdd}/>) 
      }
      </div>
  </div>
 )
}

export default ItemDetail