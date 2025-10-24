import { Banner } from "../../components/Banner/Banner";
import { ProductGrid } from "../../components/ProductGrid/ProductGrid";
import { Categories } from "../../components/Categories/Categories";
import { useProducts } from "../../hooks/useProducts";

const MainPage = () => {
  const { products, categories, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="app">
        <div className="loading">
          <div className="loading__spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error">Ошибка: {error}</div>
      </div>
    );
  }

  return (
    <div className="app">
      <Banner />

      <div className="main-content">
        <Categories categories={categories} />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default MainPage;
