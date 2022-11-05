import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import CartContext from "../Context/CartContext";
import Product from "../components/Product";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { product } = useContext(CartContext)
  const { cart, setCart } = useContext(CartContext)
  
  useEffect(() =>{
    getTotalFromProducts(product)
  }, [product])

  function getTotalFromProducts(product) {
    let soma = []
    product.forEach((element) =>{
      if(element.isSelected === true){
        soma.push(element.price)
      }
    } )
    const Total = soma.reduce((acc, current) => {
      return acc += current;
    }, 0) 
    setCart(Total)
  } 
  
  return (
    <div className="CheckoutPage">      
      <h1>Produtos Selecionados</h1>
      {product.map((element)=>{
        if(element.isSelected === true){
          return(
            <Product
              key={element.name}
              name={element.name}
              icon={element.icon}
              price={element.price}
             />
          )
        }
      })}
      {/* TODO: aqui vão os produtos selcionados na tela de produtos */}
      <div className="register">
        <b>Total da compra:</b> R$ <span>{cart.toFixed(2).replace(".", ",")}</span>
      </div>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>
  )
}