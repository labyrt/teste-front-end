export interface Product {
  id: string;
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export type ProductsPayload =
  | Product[]
  | { products?: Product[]; data?: Product[]; items?: Product[] };
