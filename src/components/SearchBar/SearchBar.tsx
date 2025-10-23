import React from "react";
import { type Product } from "../../api/types";
import SearchSvg from "../../assets/svg/search.svg?react";
import { ProductItem } from "../ProductItem/ProductItem";
import "./SearchBar.css";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  popularSearches: string[];
  onQuickSearch: (term: string) => void;
  isSearchFocused: boolean;
  onSearchFocus: () => void;
  onSearchBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
  filteredProducts: Product[];
}

const SearchBar = ({
  searchTerm,
  onSearchChange,
  popularSearches,
  onQuickSearch,
  isSearchFocused,
  onSearchFocus,
  onSearchBlur,
  searchInputRef,
  filteredProducts,
}: SearchBarProps) => {
  const showPopularSearches = isSearchFocused && searchTerm.length === 0;
  const showSearchResults = isSearchFocused && searchTerm.length > 0;
  const showGoButton = isSearchFocused && searchTerm.length > 0 && filteredProducts.length > 0;

  return (
    <div className="search__container">
      <SearchSvg className="search__icon" />
      <div className="search__bar">
        <input
          ref={searchInputRef}
          type="text"
          name="search"
          placeholder="Найти товары"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={onSearchFocus}
          onBlur={onSearchBlur}
          className="search__input"
        />
          {showGoButton && (
            <button 
              type="button" 
              className="search__go-button"
            >
              Перейти
            </button>
          )}
      </div>

      {isSearchFocused && (
        <div className="search__dropdown">
          {showPopularSearches && popularSearches.length > 0 && (
            <div className="search__popular">
              <span className="search__popular-header">Часто ищут:</span>
              <div className="search__popular-list">
                {popularSearches.map((term, index) => (
                  <div className="search__popular-item">
                    <SearchSvg width={10} height={10}/>
                    <span
                      key={index}
                      onClick={() => onQuickSearch(term)}
                      className="search__popular-name"
                    >
                      {term}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {showSearchResults && (
            <div className="search__results">
              {filteredProducts.length > 0 ? (
                <div className="search__products">
                  {filteredProducts.slice(0, 5).map((product) => (
                    <div key={product.id} className="search__item">
                      <ProductItem
                        product={product}
                        variant="search"
                        showBadges={false}
                        showFavourite={false}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="search__no">Ничего не найдено</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
