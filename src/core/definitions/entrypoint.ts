import type {Product} from "@definitions/product";

export interface Entrypoint {
  container: HTMLElement,
  bearer_token: string;
  product: Product;
  location_context: {
    country: string;
    coordinates?: any;
    radius?: number;
  }
  options?: {
    directionality?: any;
    price_format?: never[];
    date_format?: {
      format: string;
      options?: string[];
    };
  }
}
