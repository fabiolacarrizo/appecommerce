import { useState} from 'react'
import './ItemCount.css'

const Counter = ({ onAdd }) =>{
    const [count, setCount]= useState(1)

 const stock= 20;

const incrementar= () =>{ 
  if( count < stock)  {setCount(count+1)} 
}

const disminuir= () =>{ 
 if (count > 1) {
     setCount(count-1)
} }  


 return(
    <div>
        <button className='botonContador' onClick={disminuir}>-</button>
         <span>{count}</span>
        <button className='botonContador' onClick={incrementar}>+</button>

    <p> <button className='botonContador' onClick={onAdd}>Agregar Al Carrito </button></p>

    </div>
 )
}

export default Counter