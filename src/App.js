
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';
import AppNavbar from './components/AppNavbar'

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
      
      </div>
  );
}

export default App;
