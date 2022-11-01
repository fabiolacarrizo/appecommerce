
import { Link } from 'react-router-dom'

const Item = ({id, name, code, price , img, category, stock}) =>{

    return(
        <div className='card_productos'>
            <img style={{width:300, height:400,}}  src={img} alt={name}></img>
            <h2>{name}</h2>
            <h5>Codigo: DQ{code}</h5>
            <p>${price}</p>     
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item