import './CategoriesButton.css'
import relojdama from '../../Assets/img/relojdama.jpg'
import relojeshombre from '../../Assets/img/relojeshombre.jpg'
import relojinfantil from '../../Assets/img/relojinfantil.jpg'
import { Link } from 'react-router-dom'

const CategoriesButton= ()=>{
    return(
        <div className='categories-container'>
   
<Link  to={'/category/Mujer'}>  Mujer  <img src={relojdama}></img> </Link>
 
 <Link  to={'/category/Hombre'}> hombre <img src={relojeshombre}></img> </Link>

 <Link  to={'/category/infantil'}> niños<img src={relojinfantil}></img></Link>



        </div>
    )
}


export default CategoriesButton