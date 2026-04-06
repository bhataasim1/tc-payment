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