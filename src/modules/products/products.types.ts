import { StripeMetaData } from "../../types/types";

export type CreateProductInput = {
  name: string;
  description?: string;
  images?: string[];
  metadata?: StripeMetaData;
  stripeAccountId: string;
};

// export type ProductResponse = {
//   id: string;
//   name: string;
//   description?: string | null;
//   active: boolean;
//   created: number;
//   deleted?: void;
//   images: Array<string>;
//   livemode: boolean;
//   metadata: StripeMetaData;
//   unit_label?: string | null;
//   updated: number;
//   url: string | null;
// };


export type UpdateProductInput = {
  productId: string;
  name?: string;
  description?: string;
  images?: string[];
  metadata?: Record<string, string | number | null>;
  active?: boolean;
  stripeAccountId: string;
};