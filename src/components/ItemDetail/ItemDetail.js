import Counter from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({id, name, codigo, categoria, price, stock, img, description}) =>{
  const [goCart, setGoCart] = useState(false);

    const handleOnAdd = (quantity) => {
      setGoCart(true);
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
      <h5>Codigo:{codigo}</h5>
      <h5>Categoria:{categoria} </h5>
      <h5>Descripcion: {description}</h5>
      <p>${price}</p>
      {
        goCart
        ? <p className="botonContador"> <Link className="botonContador" to={'/cart'} >Finalizar Compra</Link></p> 
         :  <Counter onAdd={handleOnAdd}/>
      }
      </div>
  </div>
 )
}

export default ItemDetail