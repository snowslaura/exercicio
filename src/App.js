import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartContext from "./Context/CartContext";

export default function App() {
  const[ product , setProduct] = useState([
    { name: "Bolo de aniversário", icon: "🎂", price: 20.9, isSelected:false },
  { name: "Balão", icon: "🎈", price: 5.6, isSelected:false },
  { name: "Confete", icon: "🎉", price: 2.9, isSelected:false },
  { name: "Suco de caixinha", icon: "🧃", price: 1.9, isSelected:false },
  { name: "Doces diversos", icon: "🍬", price: 12.3, isSelected:false }
]) 
  const [cart, setCart] = useState(0)
  
  return (
    <CartContext.Provider value={{cart, setCart, product, setProduct}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}