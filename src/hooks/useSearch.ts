import { useState, useMemo, useRef } from "react";
import { type Product } from "../api/types";

export const useSearch = (products: Product[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;

   const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return filtered;
  }, [products, searchTerm]);

  const quickSearch = (term: string) => {
    setSearchTerm(term);
    searchInputRef.current?.focus();
    setIsSearchFocused(true);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains("search-tag")&& 
        !target?.closest('.search-dropdown')) {
      setIsSearchFocused(false);
    }
  }

  const handleChangeSearch = (term: string) => {
    setSearchTerm(term);

  }

  return {
    searchTerm,
    setSearchTerm: handleChangeSearch,
    isSearchFocused,
    filteredProducts,
    quickSearch,
    handleSearchFocus,
    handleSearchBlur,
    searchInputRef,
  };
};
