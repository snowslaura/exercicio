import { useNavigate } from "react-router-dom";
import CartContext from "../Context/CartContext";
import Product from "../components/Product";
import { useContext } from "react";



export default function ProductsPage() {
  const { product } = useContext(CartContext)
  
  const navigate = useNavigate();
  return (
    <div className="ProductsPage">
      <h1>Produtos disponíveis</h1>
      <p>Por questões de estoque, as compras estão limitadas a uma unidade por cpf.</p>
      {
        product.map(product => {
          return (
            <Product
              key={product.name}
              name={product.name}
              icon={product.icon}
              price={product.price}
              select={product.isSelected}              
            />
          )
        })
      }
      <button onClick={() => navigate("/checkout")}>Fechar compra</button>
    </div>
  )
} 