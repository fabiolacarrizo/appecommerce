import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByIdCategory, getProductsByIdSubCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import relojdama  from '../../Assets/img/relojdama.jpg'
import relojeshombre  from '../../Assets/img/relojeshombre.jpg'
import relojinfantil  from '../../Assets/img/relojinfantil.jpg'
import relojoferta  from '../../Assets/img/relojoferta.jpg'
import logo2 from '../../Assets/img/logo2.png'
import { getDocs, collection, query, where, orderBy} from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemListContainer= ({ greeting })=>{
  const [products, setProducts] = useState([])
  const [loading, setLoading] =useState(true) 

  const {categoryId} = useParams()
  const {machine} = useParams()
  const {sale} = useParams()

useEffect(()=>{
  setLoading(true)

const collectionRef = categoryId 
? query (collection(db, 'products'), where('category', '==', categoryId))
: collection(db, 'products')

 getDocs(collectionRef ).then(response =>{
const productsAdapted = response.docs.map(doc =>{
  const data= doc.data()
  return {id : doc.id, ...data}
})

    setProducts(productsAdapted)
 }).finally(()=>{
setLoading(false)
 })
},[categoryId])



if(loading) {
return(
  <div>
  <div  style={{marginTop:200, width:200, height:200, color:'pink',}} className='spinner-border' role="status"> <img style={{width: 100, height:100, alignSelf:'center', marginTop: 40, borderRadius:20, color:'pink' }} src={logo2}></img>  </div>

</div>
)}


  return (
    <div style={{marginTop:20, }}>
   
    <Link style={{textDecoration:'none'}} to={'/category/Mujer'} ><div className='boton_categoriaMujer'><p>Mujer </p> </div> </Link>
 
    <Link className='boton_categoria' to={'/category/Hombre'}>hombre <img src={relojeshombre}></img> </Link>

    <Link className='boton_categoria' to={'/category/infantil'}> niños<img src={relojinfantil}></img></Link>

    <Link className='boton_categoria' to={'/category/Oferta'} > oferta<img src={relojoferta}></img></Link>

    <div> 
      <Link  to={'/subcategoria/Analogico'}>Analogicos</Link>
      <Link to={'/subcategoria/Digital'}>Digitales</Link>
    </div>
    
    <ItemList products={products}/>

    </div>
  )
}


export default ItemListContainer
