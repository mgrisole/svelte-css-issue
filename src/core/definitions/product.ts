export interface Product {
  sku_id: string;
  sizes: ProductSize[];
}

export interface ProductSize {
  label: string;
  size_id: string;
}
