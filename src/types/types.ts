export interface MetadataParam {
  [name: string]: string | number | null;
}

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