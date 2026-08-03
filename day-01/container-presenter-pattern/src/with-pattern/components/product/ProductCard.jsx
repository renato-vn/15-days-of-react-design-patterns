import ProductCardImage from "./ProductCardImage";
import ProductCardInfo from "./ProductCardInfo";

const ProductCard = ({
  id,
  imageUrl,
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
    <article className="product-card">
      <ProductCardImage imageUrl={imageUrl} />

      <ProductCardInfo
        id={id}
        category={category}
        name={name}
        description={description}
        rating={rating}
        price={price}
        originalPrice={originalPrice}
        inStock={inStock}
        onAddToCart={onAddToCart}
      />
    </article>
  );
};

export default ProductCard;
