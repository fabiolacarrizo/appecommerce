import { useEffect } from 'react'
import './FormCheckout.css'


const FormCheckout = ()=>{






    return(
        <div>
  <h2  >Formulario De Compras</h2>

<form>
<div className='formCheckout'>
<p>  <label>Nombre y Apellido</label>
 <input  type='text' placeholder='Nombre'  required></input>

 <label>Telefono</label> 
<input  type='number' placeholder='TLF'  required></input></p> 

<p>  <label>Correo</label> 
<input  type='email' placeholder='Correo'  required></input>

  <label> Confirmar Correo</label> 
<input  type='email' placeholder='Correo'  required></input></p>


<h3>Datos para Envio</h3>

<div className='datosEnvio'>

<p>  <label>Domicilio</label>
 <input  type='text' placeholder='Domicilio'  required></input> 
 <label>Nro</label> <input  type='Number' placeholder='Altura'  required></input>

 <label>CP</label>
 <input  type='number' placeholder='CP'  required></input></p>

 <p>  <label>Localidad</label>
 <input  type='text' placeholder='Localidad'  required></input>

  <label>Provincia</label>
 <input  type='text' placeholder='Provincia'  required></input></p>

<p> <textarea style={{width:450}} name="comentarios" placeholder="Indiquenos aca si el pedido sera retirado en una de nuestras sucursales, enviado con un trasporte o por correo argentino, tenga en cuenta que el costo del envio por correo argentino es sumado al importe total. ¡Gracias!" id="" rows="4" required></textarea></p>
 </div>

</div>
<button >Confirmar Datos</button>

</form>  
        </div>
    )
}

export default FormCheckout