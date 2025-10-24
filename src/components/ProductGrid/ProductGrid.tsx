import { useState, useCallback } from "react";
import { type Product } from "../../api/types";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useScroll } from "../../hooks/useScroll";
import "./ProductGrid.css";

interface ProductGridProps {
  products: Product[];
  perLoad?: number;
}

export const ProductGrid = ({ products, perLoad = 9 }: ProductGridProps) => {
  const [visibleCount, setVisibleCount] = useState(perLoad);
  const [loading, setLoading] = useState(false);

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setVisibleCount((prev) => prev + perLoad);
    setLoading(false);
  }, [loading, hasMore]);

  useScroll(loadMore, hasMore, loading);

  if (products.length === 0) {
    return (
      <div className="no-products">
        <p>Товары не найдены</p>
      </div>
    );
  }

  return (
    <div className="products__section">
      <div className="products__grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {loading && (
        <div className="products__loading">
          <div className="loading__spinner"></div>
        </div>
      )}
    </div>
  );
};
