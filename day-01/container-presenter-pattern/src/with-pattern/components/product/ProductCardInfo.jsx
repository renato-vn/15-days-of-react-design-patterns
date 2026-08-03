import ProductActions from "./ProductActions";
import ProductPrice from "./ProductPrice";
import ProductRating from "./rating/ProductRating";

const ProductCardInfo = ({
  id,
  category,
  name,
  description,
  rating,
  price,
  originalPrice,
  inStock,
  onAddToCart,
}) => {
  return (
    <div className="product-info">
      <h3 className="product-category">{category}</h3>

      <h2 className="product-name">{name}</h2>

      <p className="product-description">{description}</p>

      <ProductRating rating={rating} />

      <ProductPrice price={price} originalPrice={originalPrice} />

      <ProductActions inStock={inStock} onAddToCart={onAddToCart} id={id} />
    </div>
  );
};

export default ProductCardInfo;
