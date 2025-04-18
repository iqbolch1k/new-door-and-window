import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import ProductDetail from "./components/products/ProductDetail";
import Products from "./components/products/Products";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
