export type CreateBillingPortalSessionInput = {
  customer: string;
  returnUrl: string;
  stripeAccountId: string;
  userActiveSubscriptionId?: string;
};

export type BillingPortalSessionResponse = {
  id: string;
  url: string;
  configuration: string
  created: number;
  customer: string;
  customer_account: string | null;
  livemode: boolean;
  on_behalf_of: string | null;
  return_url: string | null;
};


export type RetrieveInvoiceInput = {
  invoiceId: string;
  stripeAccountId: string;
};

export type InvoiceResponse = {
  id: string;
  amount_due: number;
  currency: string;
  status: string;
  hosted_invoice_url: string | null;
  invoice_pdf: string | null;
};