function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

        <p className="rating">⭐⭐⭐⭐⭐</p>

   <p className="discount">{product.discount}</p> 
      <p>{product.price}</p>
      

      <button>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;