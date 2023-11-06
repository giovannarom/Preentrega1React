import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/Header/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Header/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from './components/Header/NotFound/NotFound';
import { CartProvider } from './context/CartContext';
import Cart from './components/Header/Cart/Cart.js';

const App= () => {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Welcome to Climate Works!" caption="Not only are we navigating the latest trends in technology and design, but we are also committed to fighting climate change."/>}/>
            <Route path="/category/:categoryId"  element={<ItemListContainer greeting="Shop at Climate Works!" caption="You're contribuiting to climate action with every purchase."/>}/>
            <Route path="/item/:itemId"  element={<ItemDetailContainer/>}/>
            <Route  path="/cart"  element={<Cart/>} />
            <Route  path="*"  element={<NotFound/>} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
