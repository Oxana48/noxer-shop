import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useProducts } from "../../hooks/useProducts";
import { useSearch } from "../../hooks/useSearch";
import "./Layout.css";

const Layout = () => {
  const { specialParams, popularSearches, products } = useProducts();
  const {
    searchTerm,
    setSearchTerm,
    quickSearch,
    isSearchFocused,
    handleSearchFocus,
    handleSearchBlur,
    searchInputRef,
    filteredProducts
  } = useSearch(products);

  return (
    <div className="layout">
      <header className="container">
        <Header specialParams={specialParams}>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            popularSearches={popularSearches}
            onQuickSearch={quickSearch}
            isSearchFocused={isSearchFocused}
            onSearchFocus={handleSearchFocus}
            onSearchBlur={handleSearchBlur}
            searchInputRef={searchInputRef}
            filteredProducts={filteredProducts}
          />
        </Header>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">
        <Footer specialParams={specialParams} />
      </footer>
    </div>
  );
};

export default Layout;
