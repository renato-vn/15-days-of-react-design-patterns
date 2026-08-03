const ProductRatingStar = ({ el, rating }) => {
  return <div className={`${el <= rating ? "star" : "star.empty"}`}>★</div>;
};

export default ProductRatingStar;
