import type {ProductSize} from "@definitions/product";

export interface Availability extends ProductSize {
  available: boolean;
}
