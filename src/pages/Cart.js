import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart(){

  const {cart,removeFromCart,updateQty} = useContext(CartContext);

  const total = cart.reduce((acc,item)=>acc + item.price*item.qty,0);

  return(
    <div className="container mt-4">

      <h3>Your Cart</h3>

      {cart.map(item=>(
        <div className="card p-3 mb-2" key={item.id}>
          <h5>{item.name}</h5>
          <p>₹{item.price}</p>

          <input
            type="number"
            value={item.qty}
            onChange={(e)=>updateQty(item.id,e.target.value)}
          />

          <button
            className="btn btn-danger mt-2"
            onClick={()=>removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h4>Total: ₹{total}</h4>

    </div>
  )
}

export default Cart;

