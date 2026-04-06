import { StripeMetaData } from "../../types/types";

export type RetrievePaymentIntentInput = {
  paymentIntentId: string;
  stripeAccountId: string;
};

export type PaymentIntentResponse = {
  id: string;
  status:
  | 'requires_payment_method'
  | 'requires_confirmation'
  | 'requires_action'
  | 'processing'
  | 'succeeded'
  | 'canceled';
  currency: string;
  amount: number;
  amount_capturable: number;
  amount_received: number;
  client_secret: string | null;
  created: number;
  metadata: StripeMetaData;
  receipt_email: string | null;
};