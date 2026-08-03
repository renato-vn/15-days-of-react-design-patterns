import ProductRatingStar from "./ProductRatingStar";

const ProductRating = ({ rating }) => {
  return (
    <div className="product-rating">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((el) => (
          <ProductRatingStar key={el} el={el} rating={rating} />
        ))}
      </div>
      <span className="rating-text">{rating}</span>
    </div>
  );
};

export default ProductRating;
