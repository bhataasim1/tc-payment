import {
  InvoiceCreation,
  LineItem,
  PaymentIntentData,
  PaymentMethodType,
  SubscriptionUpdateParam
} from "../../types/types";


export type CreateCheckoutSessionDto = {
  mode: "payment" | "subscription";
  paymentMethodTypes: PaymentMethodType[];
  customer: string;
  clientReferenceId?: string;
  lineItems: LineItem[]
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
  paymentIntentData?: PaymentIntentData;
  invoiceCreation?: InvoiceCreation;
  stripeAccountId: string;
}

export type UpdateSubscriptionDto = {
  subscriptionId: string;
  stripeAccountId: string;
  params: SubscriptionUpdateParam
}


export type CheckoutSessionResponse = {
  id: string;
  url: string;
};

export type UpdateSubscriptionResponse = {
  id: string;
  status: "incomplete" | "incomplete_expired" | "trialing" | "active" | "past_due" | "canceled" | "unpaid" | "paused";
  billing_cycle_anchor: number;
  cancel_at: number | null;
  cancel_at_period_end: boolean;
  canceled_at: number | null;
  created: number;
  currency: string;
  customer_account: string | null;
  days_until_due: number | null;
  description: string | null;
  ended_at: number | null;
  next_pending_invoice_item_invoice: number | null;
  start_date: number;
  trial_end: number | null;
  trial_start: number | null;
};