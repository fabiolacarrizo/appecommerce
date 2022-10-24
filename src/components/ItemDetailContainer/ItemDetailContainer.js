import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import {useState, useEffect} from "react"
import { getProductsById } from "../../asyncMock"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ()=>{

const [product, setProduct] = useState()
const [loading, setLoading] = useState(true)


const { productId } = useParams()
console.log(productId)

useEffect(() =>{
  getProductsById(productId).then(response => {
    setProduct(response)
  }).finally(()=>{
    setLoading(false)
  })
}, [productId])

if(loading) {
  return(
    <div style={{marginTop:200, width:100, height:100, color:'pink'}} className='spinner-border' role="status"></div>
  )
}


return(
    <div style={{backgroundColor: "#AEBDCA", padding:20, margin: 50,}}>
      <h1>Detalle del Producto</h1>
      <ItemDetail {...product} />
    </div>
)
}

export default ItemDetailContainer