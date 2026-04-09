export type CreateBillingPortalSessionInput = {
  customer: string;
  returnUrl: string;
  stripeAccountId: string;
  userActiveSubscriptionId?: string;
};

// export type BillingPortalSessionResponse = {
//   id: string;
//   url: string;
//   configuration: string
//   created: number;
//   customer: string;
//   customer_account: string | null;
//   livemode: boolean;
//   on_behalf_of: string | null;
//   return_url: string | null;
// };


export type RetrieveInvoiceInput = {
  invoiceId: string;
  stripeAccountId: string;
};

// export type InvoiceResponse = {
//   id: string;
//   amount_due: number;
//   currency: string;
//   status: string;
//   hosted_invoice_url: string | null;
//   invoice_pdf: string | null;
// };

export type RetrieveSubscriptionInput = {
  subscriptionId: string;
  stripeAccountId: string;
};

// export type SubscriptionResponse = {
//   id: string;
//   status: Status;
//   cancel_at_period_end: boolean;
//   items: ApiList<StripeSubscriptionItem>;
//   application_fee_percent: number | null;
//   billing_cycle_anchor: number;
//   cancel_at: number | null;
//   canceled_at: number | null;
//   collection_method: "charge_automatically" | "send_invoice";
//   created: number;
//   currency: string;
//   customer: string | StripeCustomer | StripeDeletedCustomer;
//   customer_account: string | null;
//   days_until_due: number | null;
//   description: string | null;
//   discounts: Array<string | StripeDiscount>;
//   ended_at: number | null;
//   latest_invoice: string | StripeInvoice | null;
//   livemode: boolean;
//   metadata: StripeMetaData;
//   next_pending_invoice_item_invoice: number | null;
//   start_date: number;
//   trial_end: number | null;
//   trial_start: number | null;
// };

export type CancelSubscriptionInput = {
  subscriptionId: string;
  stripeAccountId: string;
};