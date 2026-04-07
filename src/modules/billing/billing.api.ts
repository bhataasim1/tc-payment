
import { HttpClient } from '../../core/https';
import {
  BillingPortalSessionResponse,
  CancelSubscriptionInput,
  CreateBillingPortalSessionInput,
  InvoiceResponse,
  RetrieveInvoiceInput,
  RetrieveSubscriptionInput,
  SubscriptionResponse,
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

  retrieveInvoice(
    data: RetrieveInvoiceInput
  ): Promise<InvoiceResponse> {
    return this.http.request('/v1/payment/invoice/retrieve', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  retrieveSubscription(
    data: RetrieveSubscriptionInput
  ): Promise<SubscriptionResponse> {
    return this.http.request('/v1/payment/subscription/retrieve', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  cancelSubscription(
    data: CancelSubscriptionInput
  ): Promise<SubscriptionResponse> {
    return this.http.request('/v1/payment/subscription/cancel', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}