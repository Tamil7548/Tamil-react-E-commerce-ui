import { useParams } from "react-router-dom";
import products from "../data/Products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails(){

  const {id} = useParams();
  const {addToCart} = useContext(CartContext);

  const product = products.find(p=>p.id === Number(id));

  if(!product) return <h2>Not Found</h2>;

  return(
    <div className="container mt-4">

      <img src={product.image} width="250"/>

      <h2>{product.name}</h2>
      <h4>₹{product.price}</h4>

      <button
        className="btn btn-success"
        onClick={()=>addToCart(product)}
      >
        Add To Cart
      </button>

    </div>
  )
}

export default ProductDetails;

