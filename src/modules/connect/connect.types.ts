export type CreateConnectAccountInput = {
  email: string;
};

export type CreateConnectAccountResponse = {
  id: string;
  type: "standard" | "express" | "custom" | "none";
  email: string | null;
  charges_enabled: boolean;
  country?: string;
  created?: number;
  default_currency?: string;
  deleted?: void;
  details_submitted: boolean;
  payouts_enabled: boolean;
};

export type CreateOnboardingLinkInput = {
  stripeAccountId: string;
  refreshUrl: string;
  returnUrl: string;
};

export type CreateOnboardingLinkResponse = {
  url: string;
  expires_at: number;
  created: number;
};

export type AccountIdInput = {
  accountId: string;
};


export type AccountBalanceResponse = {
  available: {
    amount: number;
    currency: string;
    source_type: SourceType
  }[];
  pending: {
    amount: number;
    currency: string;
    source_type: SourceType
  }[];
  livemode: boolean;
  instant_available: {
    amount: number;
    currency: string;
    source_type: SourceType
  }[];
  refund_and_dispute_prefunding: {
    available: {
      amount: number;
      currency: string;
    },
    pending: {
      amount: number;
      currency: string;
    }
  }
};

type SourceType = {
  bank_account?: number;
  card?: number;
  fpx?: number;
}


export type ConnectAccountResponse = {
  id: string;
  type: "standard" | "express" | "custom" | "none";
  email: string | null;
  charges_enabled: boolean;
  payouts_enabled: boolean;
  country?: string;
  created?: number;
  default_currency?: string;
  deleted?: void;
  details_submitted: boolean;
  individual?: Person;
};

interface Person {
  id: string;
  account: string;
  created: number;
  deleted?: void;
  email?: string | null;
  first_name?: string | null;
  gender?: string | null;
  last_name?: string | null;
  maiden_name?: string | null;
  nationality?: string | null;
  phone?: string | null;
}


export type DeleteAccountResponse = {
  id: string;
  deleted: boolean;
}