import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import Sucursales from './components/Sucursales/sucursales';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';


function App() {
/*
const handleOnAdd= ()=>{
console.log('click al agregar al carrito');
}
 */
  return (
    <div className="App">
    <BrowserRouter>
    <CartProvider>
      <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>  
      <Route path= '/detail/:productId' element={<ItemDetailContainer/>}/> 
      <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}>  </Route>
      <Route path='/subcategoria/:subCategoriaId' element={<ItemListContainer/>} ></Route>
      <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      <Route path='/cart' element={<Cart/>} > </Route>
      <Route path='/sucursales' element={<Sucursales/>}></Route>
      <Route path='/sobrenosotros' element={<SobreNosotros/>}></Route>
   </Routes>
   <Footer/>
   </CartProvider>
     </BrowserRouter> 
    </div>
  );
}

export default App;
