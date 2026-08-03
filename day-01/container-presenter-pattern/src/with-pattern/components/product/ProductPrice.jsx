const ProductPrice = ({ price, originalPrice }) => {
  return (
    <div className="product-price">
      <span className="current-price">${price}</span>
      <span className="original-price">${originalPrice}</span>
      <div className="discount-badge">
        {Math.round((price * 100) / originalPrice)}% OFF
      </div>
    </div>
  );
};

export default ProductPrice;
