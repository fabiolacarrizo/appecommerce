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

const ItemListContainer= ({ greeting })=>{
  const [products, setProducts] = useState([])
  const [loading, setLoading] =useState(true) 

  const {categoriaId} = useParams()
  const {subCategoriaId} = useParams()

useEffect(()=>{
  setLoading(true)

 const datosCategorias = categoriaId ? getProductsByIdCategory : getProducts 
 // const filtrarsubcategoria = subCategoriaId ? getProductsByIdSubCategory : getProducts 



 datosCategorias(categoriaId ).then(response =>{
    setProducts(response)
 }).finally(()=>{
setLoading(false)
 })
},[categoriaId])

/*
const filtrarsubcategoria = subCategoriaId ? getProductsByIdSubCategory : getProducts 


filtrarsubcategoria(subCategoriaId).then(response =>{
  setProducts(response)
}).finally(()=>{
setLoading(false)
})
},[subCategoriaId])

*/

if(loading) {
return(
  <div>
  <div  style={{marginTop:200, width:200, height:200, color:'pink',}} className='spinner-border' role="status"> <img style={{width: 100, height:100, alignSelf:'center', marginTop: 40, borderRadius:20, color:'pink' }} src={logo2}></img>  </div>

</div>
)}



  return (
    <div style={{marginTop:20, }}>
   
    <Link style={{textDecoration:'none'}} to={'/categoria/Mujer'} ><div className='boton_categoriaMujer'><p>Mujer </p> </div> </Link>
 
    <Link className='boton_categoria' to={'/categoria/Hombre'}>hombre <img src={relojeshombre}></img> </Link>

    <Link className='boton_categoria' to={'/categoria/Niños'}> niños<img src={relojinfantil}></img></Link>

    <Link className='boton_categoria' to={'/categoria/Oferta'} > oferta<img src={relojoferta}></img></Link>

    <div> 
      <Link  to={'/subcategoria/Analogico'}>Analogicos</Link>
      <Link to={'/subcategoria/Digital'}>Digitales</Link>
    </div>
    
    <ItemList products={products}/>

    </div>
  )
}


export default ItemListContainer
