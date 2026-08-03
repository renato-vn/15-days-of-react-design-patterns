const ProductCardImage = ({ imageUrl }) => {
  return (
    <div className="product-image">
      <img className="product-image" src={imageUrl} />
    </div>
  );
};

export default ProductCardImage;
