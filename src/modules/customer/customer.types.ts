export type CreateCustomerInput = {
  email: string;
  fullName: string;
  customerConnectAccountId: string;
  metadata?: Record<string, any>;
};

export type CustomerResponse = {
  id: string;
  email: string | null;
  name: string | null;
  created: number;
  currency?: string | null;
  customer_account?: string | null;
  deleted?: void;
  description: string | null;
  livemode: boolean;
};