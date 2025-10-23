import { useState, useEffect } from "react";
import { fetchProducts } from "../api/Products";
import { type ProductsData } from "../api/types";

export const useProducts = () => {
  const [data, setData] = useState<ProductsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const productsData = await fetchProducts();
        setData(productsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products:data?.products || [], 
    categories: data?.categories || [], 
    specialParams: data?.specialParams || null, 
    popularSearches: data?.popularSearches || [], 
    loading, 
    error };
};
