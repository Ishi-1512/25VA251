import "./App.css";

import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";

import products from "./data/products";

function App() {
  return (
    <>
      <Navbar />

      <Categories />

      <img
        className="banner"
        src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
        alt="Amazon Banner"
      />

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

     <footer>
          Back to Top
     </footer>
    </>
  );
}

export default App;