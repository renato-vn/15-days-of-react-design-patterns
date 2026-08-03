import { useEffect, useMemo, useState } from "react";
import ProductListPresenter from "./ProductListPresenter";

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const visibleProducts = useMemo(() => {
    return [...products]
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      )
      .sort((a, b) => {
        switch (sortOrder) {
          case "low":
            return a.price - b.price;

          case "high":
            return b.price - a.price;

          default:
            return 0;
        }
      });
  }, [products, search, sortOrder]);

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/products`,
      );

      const data = await response.json();

      setProducts(data);
    } catch (err) {
      setError("Failed to fetch products data");
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    fetchProductsData();
  };

  const handleAddToCart = (id) => {
    const product = products.find((p) => p.id === id);

    if (!product) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    };

    setCart((prev) => {
      let found = false;

      const updatedCart = prev.map((item) => {
        if (item.id !== id) return item;

        found = true;

        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });

      if (found) return updatedCart;

      return [
        ...updatedCart,
        {
          ...cartItem,
          quantity: 1,
        },
      ];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      const item = prev.find((item) => item.id === id);

      if (!item) return;

      let updatedCart;

      if (item.quantity === 1) {
        updatedCart = prev.filter((item) => item.id !== id);
        return updatedCart;
      } else {
        updatedCart = prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        });
      }

      return updatedCart;
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSortFilters = () => {};

  return (
    <ProductListPresenter
      loading={loading}
      error={error}
      products={visibleProducts}
      cart={cart}
      search={search}
      sortOrder={sortOrder}
      onSearchChange={setSearch}
      onSortChange={setSortOrder}
      onAddToCart={handleAddToCart}
      onRemoveFromCart={handleRemoveFromCart}
      onClearCart={handleClearCart}
      onRetry={handleRetry}
    />
  );
};

export default ProductListContainer;
