import { type Product } from "../../api/types";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductGrid.css";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="no-products">
        <p>Товары не найдены</p>
      </div>
    );
  }

  return (
    <section className="products__section">
      <div className="products__grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
