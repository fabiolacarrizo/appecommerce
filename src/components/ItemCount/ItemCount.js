import { useState} from 'react'
import './ItemCount.css'

const Counter = ({ onAdd, stock}) =>{
    const [quantity, setQuantity]= useState(1)


const incrementar= () =>{ 
  if( quantity < stock)  {setQuantity(quantity+1)} 
}

const disminuir= () =>{ 
 if (quantity > 1) {
     setQuantity(quantity-1)
} }  


 return(
    <div>
        <button className='botonContador' onClick={disminuir}>-</button>
         <span>{quantity}</span>
        <button className='botonContador' onClick={incrementar}>+</button>

    <p> <button className='botonContador' onClick={() => onAdd(quantity)}>Agregar Al Carrito </button></p>

    </div>
 )
}

export default Counter