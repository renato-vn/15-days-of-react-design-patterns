const CartSummary = ({ cart, onRemoveFromCart, onClearCart }) => {
  return (
    <div className="cart-summary">
      <div className="cart-header">
        <h3>Cart</h3>
        <button className="clear-cart-btn" onClick={onClearCart}>
          🗑️
        </button>
      </div>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imageUrl} />

          <div className="cart-item-info">
            <div>{item.name}</div>

            <div className="cart-item-info-digs">
              <div>${item.price.toFixed(2)}</div>
              <span>x{item.quantity}</span>
            </div>
          </div>

          <button
            className="remove-cart-btn"
            onClick={() => onRemoveFromCart(item.id)}
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartSummary;
