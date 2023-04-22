import NavBar from '../src/components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import { CartProvider } from './components/context/CartContext.js';
import Cart from './components/Cart.js';
import "./App.css";
function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <CartProvider>
        <NavBar/>
          <Routes>
            <Route path="/" exact element={<ItemListContainer/>}/>
            <Route path="/category/:category" exact element={<ItemListContainer/>}/>  
            <Route path="/item/:id" exact element={<ItemDetailContainer/>}/>      
            <Route path="/cart" exact element={<Cart/>}/>
          </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
