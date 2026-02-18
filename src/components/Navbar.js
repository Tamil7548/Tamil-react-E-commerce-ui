import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar(){

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc,item)=>acc + item.qty,0);

  return(
    <nav className="navbar navbar-dark bg-dark p-3">

      <Link className="navbar-brand" to="/">Shop</Link>

      <Link className="btn btn-warning" to="/cart">
        Cart ({totalItems})
      </Link>

    </nav>
  )
}

export default Navbar;
