import { useEffect, useState, createContext } from 'react'
import './FormCheckout.css'
import Swal from "sweetalert2";



export const FormData = createContext({
  name:"",
  tlf:"",
  email:"",
  checkEmail:"",
  direction:"",
  directionNumber:"",
  cp:"",
  location:"",
  province:"",
  comment:"",
})


const FormCheckout = ({completoDatos})=>{

  const [name, setName] = useState("");
    const [tlf, setTlf] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    const [direction, setDirection] = useState("");
    const [directionNumber, setDirectionNumber] = useState("");
    const [cp, setCp] = useState("");
    const [location, setLocation] = useState("");
    const [province, setProvince] = useState("");
    const [comment, setComment] = useState ("");


const submit = (e) => {
    e.preventDefault ();
    if (!name || !tlf || !email || !checkEmail || !direction || !direction || !directionNumber || !cp || !location || !province || !comment )
        {
            return(
                Swal.fire('Completa tus datos porfavor') 
            )
        }
        else if (email != checkEmail && email && checkEmail) {
          return(
            Swal.fire('Los email no coinciden')
          )
    }

    else { completoDatos(
        name,
        tlf,
        email,
        checkEmail,
        direction,
        directionNumber,
        cp,
        location,
        province,
        comment,
    )
      return(
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tus datos Fueron cargados',
          showConfirmButton: false,
          timer: 1500
        })
      )

   
    }
    }


    return(
        <div>
  <h2  >Formulario De Compras</h2>

<form>
<div className='formCheckout'>
<p>  <label>Nombre y Apellido</label>
 <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nombre'  required></input>

 <label>Telefono</label> 
<input value={tlf} onChange={(e) => setTlf(e.target.value)} type='number' placeholder='TLF'  required></input></p> 

<p>  <label>Correo</label> 
<input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Correo'  required></input>

  <label> Confirmar Correo</label> 
<input value={checkEmail} onChange={(e) => setCheckEmail(e.target.value)} type='email' placeholder='Correo'  required></input></p>


<h3>Datos para Envio</h3>

<div className='datosEnvio'>

<p>  <label>Domicilio</label>
 <input value={direction} onChange={(e) => setDirection(e.target.value)} type='text' placeholder='Domicilio'  required></input> 
 <label>Nro</label> <input value={directionNumber} onChange={(e) => setDirectionNumber(e.target.value)} type='Number' placeholder='Altura'  required></input>

 <label>CP</label>
 <input value={cp} onChange={(e) => setCp(e.target.value)} type='number' placeholder='CP' required></input></p>

 <p>  <label>Localidad</label>
 <input value={location} onChange={(e) => setLocation(e.target.value)} type='text' placeholder='Localidad'  required></input>

  <label>Provincia</label>
 <input value={province} onChange={(e) => setProvince(e.target.value)} type='text' placeholder='Provincia'  required></input></p>

<p> <textarea value={comment} onChange={(e) => setComment(e.target.value)} style={{width:450}} name="comentarios" placeholder="Indiquenos aca si el pedido sera retirado en una de nuestras sucursales, enviado con un trasporte o por correo argentino, tenga en cuenta que el costo del envio por correo argentino es sumado al importe total. ¡Gracias!" id="" rows="4" required></textarea></p>
 </div>

</div>
<button onClick = {submit}> Confirmar Datos</button>

</form>  
        </div>
    )
}

export default FormCheckout