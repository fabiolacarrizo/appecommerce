import './Footer.css'
import instagram from '../../Assets/img/instagram.svg'
import whatsapp from '../../Assets/img/whatsapp.svg'
import correo from '../../Assets/img/correo.png'

const Footer = () =>{
 return(
   <div className='card_footer' >  
    <footer>
   <div className='card_footerItem'>

         <ul>
            <li>SUCURSALES</li>
            <li>Sarmiento 2434 / Pasteur 320</li>
            <li>Larrea 252 / Mitre 2685</li>
            <li>Balvarena- CABA CP1044</li>
        </ul>
        
        <ul>
            <li>ATENCIÓN</li>
            <li>Lunes a Viernes de 9:30am / 5:30pm</li>
            <li>Sabados y Feriados de 9:30am / 1:30pm</li>
        </ul>
        
    <ul>
        <li>CONTACTO</li>
        <li>000000000@gmail.com</li>
    </ul>
</div>
<div className='card_footericonos'>
  <img src={whatsapp}></img>
  <img src={instagram}></img>
  <img src={correo}></img>
</div>
    
    </footer>
    </div>
 )
}

export default Footer