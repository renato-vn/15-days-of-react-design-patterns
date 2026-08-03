import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";
import CartSummary from "./CartSummary";
import NotFound from "./NotFound";
import ProductCard from "./ProductCard";
import ProductCardInfo from "./ProductCardInfo";
import ProductListHeader from "./ProductListHeader";
import SortFilterControls from "./SortFilterControls";

const ProductListPresenter = ({
  loading,
  error,
  products,
  cart,
  search,
  sortOrder,
  onSearchChange,
  onSortChange,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
  onRetry,
}) => {
  if (loading) {
    return <LoadingSpinner message="Loading user profile..." />;
  }

  if (error) {
    return (
      <ErrorMessage
        title="Oops! Something went wrong loading products"
        message={error}
        onRetry={onRetry}
      />
    );
  }

  return (
    <>
      {!!cart?.length && (
        <CartSummary
          cart={cart}
          onRemoveFromCart={onRemoveFromCart}
          onClearCart={onClearCart}
        />
      )}

      <section className="product-list-container">
        <ProductListHeader />
        <SortFilterControls
          search={search}
          sortOrder={sortOrder}
          onSearchChange={onSearchChange}
          onSortChange={onSortChange}
        />

        {products.length === 0 && <NotFound message="Products not found!" />}

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              category={product.category}
              name={product.name}
              description={product.description}
              rating={product.rating}
              price={product.price}
              originalPrice={product.originalPrice}
              inStock={product.inStock}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductListPresenter;
