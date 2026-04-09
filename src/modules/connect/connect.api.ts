
import { StripeAccountLinkResponse, StripeAccountResponse, StripeBalanceResponse, StripeDeletedAccountResponse } from 'tc-stripe-contracts';
import { HttpClient } from '../../core/https';
import {
  AccountIdInput,
  CreateConnectAccountInput,
  CreateOnboardingLinkInput
} from './connect.types';

export class ConnectAPI {
  constructor(private http: HttpClient) { }

  createAccount(
    data: CreateConnectAccountInput
  ): Promise<StripeAccountResponse> {
    return this.http.request('/v1/payment/connect-account', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  createOnboardingLink(
    data: CreateOnboardingLinkInput
  ): Promise<StripeAccountLinkResponse> {
    return this.http.request(
      '/v1/payment/connect-account/onboarding-link',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }

  getBalance(
    data: AccountIdInput
  ): Promise<StripeBalanceResponse> {
    return this.http.request(
      '/v1/payment/connect-account/balance',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }

  retrieveAccount(
    data: AccountIdInput
  ): Promise<StripeAccountResponse> {
    return this.http.request(
      '/v1/payment/connect-account/retrieve',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }

  deleteAccount(
    data: AccountIdInput
  ): Promise<StripeDeletedAccountResponse> {
    return this.http.request(
      '/v1/payment/connect-account/delete',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }
}