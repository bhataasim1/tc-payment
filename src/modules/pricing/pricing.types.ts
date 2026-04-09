export type RetrievePriceInput = {
  priceId: string;
  stripeAccountId: string;
};

// export type PriceResponse = {
//   id: string;
//   currency: string;
//   unit_amount: number | null;
//   recurring?: {
//     interval: "day" | "week" | "month" | "year";
//     interval_count: number;
//   };
//   type: 'one_time' | 'recurring';
//   active: boolean;
//   created: number;
//   livemode: boolean;
//   lookup_key: string | null;
//   metadata: StripeMetaData;
//   nickname: string | null;
// };


export type CreatePriceInput = {
  productId: string;
  unitAmount: number;
  currency: string;
  stripeAccountId: string;
  recurringInterval: 'month' | 'year'; //we only support month and year
  isActive: boolean;
  metadata?: Record<string, string | number | null>;
};

export type UpdatePriceInput = {
  priceId: string;
  stripeAccountId: string;
  active: boolean;
  metadata?: Record<string, string | number | null>;
};