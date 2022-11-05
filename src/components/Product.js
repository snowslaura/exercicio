import CartContext from "../Context/CartContext";
import { useContext, useState } from "react";


export default function Product(props) {
  const {product, setProduct} = useContext(CartContext);
  const [select, setSelect]= useState(false);
  const { name, icon, price, isSelected } = props;

  const adjustedPrice = price.toFixed(2).toString().replace(".", ",");

  function selectProduct(name){
    setSelect(!select)
    const newProduct =  product.map((product)=>{
        if(product.name === name){
            product.isSelected = !product.isSelected
        }
     return product
    })
    setProduct(newProduct)
}
  return (
    <div className={`product ${select}`}
      onClick = {(() =>{selectProduct(name)})}>
      {icon} {name} - R$ {adjustedPrice}
    </div>
  );
}