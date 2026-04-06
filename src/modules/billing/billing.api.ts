
import { HttpClient } from '../../core/https';
import {
  BillingPortalSessionResponse,
  CreateBillingPortalSessionInput,
} from './billing.types';

export class BillingAPI {
  constructor(private http: HttpClient) { }

  createPortalSession(
    data: CreateBillingPortalSessionInput
  ): Promise<BillingPortalSessionResponse> {
    return this.http.request('/v1/payment/billing-portal/create', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}