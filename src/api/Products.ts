import { type ProductsData } from "./types";

export async function fetchProducts(): Promise<ProductsData> {
  const response = await fetch(
    "https://noxer-test.ru/webapp/api/products/on_main"
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return {
    products: data.products,
    categories: data.categories,
    specialParams: data.special_project_parameters,
    popularSearches:
      data.special_project_parameters_json?.fast_search_strings
        ?.parameters_list || [],
  };
}
