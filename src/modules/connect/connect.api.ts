
import { HttpClient } from '../../core/https';
import {
  AccountBalanceResponse,
  AccountIdInput,
  ConnectAccountResponse,
  CreateConnectAccountInput,
  CreateConnectAccountResponse,
  CreateOnboardingLinkInput,
  CreateOnboardingLinkResponse,
  DeleteAccountResponse,
} from './connect.types';

export class ConnectAPI {
  constructor(private http: HttpClient) { }

  createAccount(
    data: CreateConnectAccountInput
  ): Promise<CreateConnectAccountResponse> {
    return this.http.request('/v1/payment/connect-account', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  createOnboardingLink(
    data: CreateOnboardingLinkInput
  ): Promise<CreateOnboardingLinkResponse> {
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
  ): Promise<AccountBalanceResponse> {
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
  ): Promise<ConnectAccountResponse> {
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
  ): Promise<DeleteAccountResponse> {
    return this.http.request(
      '/v1/payment/connect-account/delete',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }
}