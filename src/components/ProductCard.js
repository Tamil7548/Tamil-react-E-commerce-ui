import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ProductCard({product}){

  const {addToCart} = useContext(CartContext);

  const handleAdd = ()=>{
    addToCart(product);
    toast.success("Added to cart!");
  }

  return(
    <div className="card p-3">

      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt="" />
      </Link>

      <h5>{product.name}</h5>
      <p>₹{product.price}</p>

      <button
        className="btn btn-primary"
        onClick={handleAdd}
      >
        Add to Cart
      </button>

    </div>
  )
}

export default ProductCard;

