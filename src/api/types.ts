export interface Product {
  id: number;
  name: string;
  price: number;
  old_price: number | null;
  images: ProductImage[];
  marks: ProductMark[];
}

export interface ProductImage {
  Image_URL: string;
  MainImage: boolean;
  title?: string;
  sort_order?: number;
}

export interface ProductMark {
  Mark_Name: string;
  color_code: string;
}

export interface Category {
  Category_ID: number;
  Category_Name: string;
  Category_Image?: string;
  category_images?: any;
  parent_category_id?: number;
  sort_order?: number;
}

export interface ApiResponse {
  products: Product[];
  categories: Category[];
  pagination: Pagination;
  status: string;
  special_project_parameters: SpecialProjectParameters;
  special_project_parameters_json: SpecialProjectParametersJson;
}

export interface SpecialProjectParametersJson {
  fast_search_strings?: {
    parameters_list: string[];
  };
}

export interface Pagination {
  current_page: number;
  has_next: boolean;
  has_prev: boolean;
  per_page: number;
  total_pages: number;
  total_products: number;
}

export interface SpecialProjectParameters {
  telegram_bot_username_value: string;
  telegram_header_link_value: string;
  project_name_value: string;
  project_logo_value: string;
}

export interface ProductsData {
  products: Product[];
  categories: Category[];
  specialParams: SpecialProjectParameters | null;
  popularSearches: string[];
}
