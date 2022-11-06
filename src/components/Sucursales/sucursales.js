import './sucursales.css'
import location from '../../Assets/img/location.svg'

const Sucursales =()=>{
    return(
        <div className='sucursales-container'>
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
<div>
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1DnI__Cp-mnohamflpBYMldae0zW-qsI&ehbc=2E312F" width="1200" height="600"></iframe>
</div>
 </div>
    )
}

export default Sucursales