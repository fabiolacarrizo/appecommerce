import './sucursales.css'
import location from '../../Assets/img/location.svg'

const Sucursales =()=>{
    return(
        <div>
<h1>Sucursales de la marca</h1>

<div>
<button className='card_buttonSucursal'> 
<img src={location}></img>
    Pasteur 320 | CABA Argentina
    <p> +54 9 11 7649-9749</p>
</button>

<button className='card_buttonSucursal'>
<img src={location}></img>
    Sarmiento 2434 | CABA Argentina
    <p>+54 9 11 5386-1002</p>
 </button>

 <button className='card_buttonSucursal'>
 <img src={location}></img>
    Larrea 252 | CABA Argentina
     <p> +54 9 11 3233-6634</p>
</button>

 <button className='card_buttonSucursal'>
 <img src={location}></img>
    Bartolome Mitre 2685 | CABA Argentina
    <p>+54 9 11 5969-4864</p> 
</button>
</div>

<iframe className='card_mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.936195945947!2d-58.40163288491959!3d-34.60577488045896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaeb90113249%3A0x8cbe99440213b3d!2sPasteur%20320%2C%20C1028AAH%20CABA!5e0!3m2!1ses!2sar!4v1666537516720!5m2!1ses!2sar" ></iframe>



 </div>
    )
}

export default Sucursales