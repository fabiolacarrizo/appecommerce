import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import {useState, useEffect} from "react"
import { getProductsById } from "../../asyncMock"
import { useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../service/firebase"


const ItemDetailContainer = ()=>{

const [product, setProduct] = useState()
const [loading, setLoading] = useState(true)


const { productId } = useParams()
console.log(productId)

useEffect(() =>{

const docRef= doc(db, 'products', productId)

getDoc(docRef).then(response =>{
  console.log(response);
  const data = response.data()
  const productAdapted = {id: response.id, ...data}
  setProduct(productAdapted)
}). finally(() =>{
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