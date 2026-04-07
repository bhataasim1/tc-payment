export interface StripeMetaData {
  [name: string]: string
}

export interface MetadataParam {
  [name: string]: string | number | null;
}

export interface ApiList<T> {
  data: Array<T>;
  has_more: boolean;
  url: string;
}

export type Status =
  | 'incomplete'
  | 'incomplete_expired'
  | 'trialing'
  | 'active'
  | 'past_due'
  | 'canceled'
  | 'unpaid';

export type LineItem = {
  price?: string;
  quantity: number;

  // optional passthrough
  price_data?: {
    currency: string;
    unit_amount: number;
    product_data: {
      name: string;
      description?: string;
      images?: string[];
      metadata?: MetadataParam
    };
  };
};

export type PaymentIntentData = {
  description?: string;
  metadata?: MetadataParam;
}

export type InvoiceCreation = {
  enabled: boolean;
}

type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';
type SubscriptionItem = {
  id: string;
  price: string;
  metadata?: MetadataParam
}

export type SubscriptionUpdateParam = {
  items: SubscriptionItem[];
  billing_cycle_anchor: 'unchanged' | 'now';
  proration_behavior: ProrationBehavior,
  metadata: MetadataParam
}

export interface StripeSubscriptionItem {
  id: string;
  billing_thresholds: {
    usage_gte: number | null;
  } | null;
  created: number;
  current_period_end: number;
  current_period_start: number;
  deleted?: void;
  metadata: StripeMetaData;
  plan: StripePlan;
  price: StripePrice;
  quantity?: number;
  subscription: string;
}

interface StripePrice {
  id: string;
  active: boolean;
  billing_scheme: 'per_unit' | 'tiered';
  created: number;
  currency: string;
  deleted?: void;
  livemode: boolean;
  metadata: StripeMetaData;
  type: "one_time" | "recurring";
  unit_amount: number | null;
  recurring: {
    interval: "day" | "week" | "month" | "year";
    interval_count: number;
  }
}

interface StripePlan {
  id: string;
  active: boolean;
  amount: number | null;
  billing_scheme: "per_unit" | "tiered";
  created: number;
  currency: string;
  deleted?: void;
  interval: "day" | "week" | "month" | "year";
  interval_count: number;
  livemode: boolean;
  metadata: StripeMetaData;
}

export interface StripeCustomer {
  id: string;
  address?: {
    city: string | null;
    country: string | null;
    line1: string | null;
    line2: string | null;
    postal_code: string | null;
    state: string | null;
  } | null;
  balance: number;
  business_name?: string;
  created: number;
  currency?: string | null;
  customer_account?: string | null;
  deleted?: void;
  description: string | null;
  email: string | null;
  individual_name?: string;
  invoice_credit_balance?: {
    [key: string]: number;
  };
  livemode: boolean;
  metadata: StripeMetaData;
  name?: string | null;
  next_invoice_sequence?: number;
  phone?: string | null;
  preferred_locales?: Array<string> | null;
  subscriptions?: ApiList<StripeSubscriptionItem>;
}

export interface StripeDeletedCustomer {
  id: string;
  object: 'customer';
  deleted: true;
}

export interface StripeDiscount {
  id: string;
  checkout_session: string | null;
  customer: string | StripeCustomer | StripeDeletedCustomer | null;
  customer_account: string | null;
  deleted?: void;
  end: number | null;
  invoice: string | null;
  invoice_item: string | null;
  start: number;
  subscription: string | null;
  subscription_item: string | null;
}

export interface StripeInvoice {
  id: string;
  amount_due: number;
  currency: string;
  hosted_invoice_url: string | null;
  invoice_pdf: string | null;
}


export type PaymentMethodType =
  | 'acss_debit'
  | 'affirm'
  | 'afterpay_clearpay'
  | 'alipay'
  | 'alma'
  | 'amazon_pay'
  | 'au_becs_debit'
  | 'bacs_debit'
  | 'bancontact'
  | 'billie'
  | 'blik'
  | 'boleto'
  | 'card'
  | 'cashapp'
  | 'crypto'
  | 'customer_balance'
  | 'eps'
  | 'fpx'
  | 'giropay'
  | 'grabpay'
  | 'ideal'
  | 'kakao_pay'
  | 'klarna'
  | 'konbini'
  | 'kr_card'
  | 'link'
  | 'mb_way'
  | 'mobilepay'
  | 'multibanco'
  | 'naver_pay'
  | 'nz_bank_account'
  | 'oxxo'
  | 'p24'
  | 'pay_by_bank'
  | 'payco'
  | 'paynow'
  | 'paypal'
  | 'payto'
  | 'pix'
  | 'promptpay'
  | 'revolut_pay'
  | 'samsung_pay'
  | 'satispay'
  | 'sepa_debit'
  | 'sofort'
  | 'swish'
  | 'twint'
  | 'upi'
  | 'us_bank_account'
  | 'wechat_pay'
  | 'zip';