import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

function Home(){

  const [query,setQuery] = useState("");
  const [category,setCategory] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) &&
    (category === "" || p.category === category)
  );

  return(
    <div className="container mt-4">

      {/* Search */}
      <input
        className="form-control mb-3"
        placeholder="Search product..."
        onChange={(e)=>setQuery(e.target.value)}
      />

      {/* Category */}
      <select
        className="form-select mb-3"
        onChange={(e)=>setCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value="accessories">Accessories</option>
      </select>

      <div className="row">
        {filtered.map(p=>(
          <div className="col-md-4 mb-3" key={p.id}>
            <ProductCard product={p}/>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home;

