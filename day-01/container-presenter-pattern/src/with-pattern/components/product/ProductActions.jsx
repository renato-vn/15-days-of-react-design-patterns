const ProductActions = ({ inStock, onAddToCart, id }) => {
  return (
    <div className="product-actions">
      <button
        onClick={() => onAddToCart(id)}
        className={`add-to-cart-btn ${!inStock ? "out-of-stock" : ""}`}
      >
        Add To Cart
      </button>
      <button className="wishlist-btn">♥</button>
    </div>
  );
};

export default ProductActions;
