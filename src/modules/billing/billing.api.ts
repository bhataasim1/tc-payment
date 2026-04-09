import { StripeBillingPortalSessionResponse, StripeInvoice, StripeSubscriptionResponse } from 'tc-stripe-contracts';
import { HttpClient } from '../../core/https';
import {
  CancelSubscriptionInput,
  CreateBillingPortalSessionInput,
  RetrieveInvoiceInput,
  RetrieveSubscriptionInput
} from './billing.types';

export class BillingAPI {
  constructor(private http: HttpClient) { }

  createPortalSession(
    data: CreateBillingPortalSessionInput
  ): Promise<StripeBillingPortalSessionResponse> {
    return this.http.request('/v1/payment/billing-portal/create', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  retrieveInvoice(
    data: RetrieveInvoiceInput
  ): Promise<StripeInvoice> {
    return this.http.request('/v1/payment/invoice/retrieve', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  retrieveSubscription(
    data: RetrieveSubscriptionInput
  ): Promise<StripeSubscriptionResponse> {
    return this.http.request('/v1/payment/subscription/retrieve', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  cancelSubscription(
    data: CancelSubscriptionInput
  ): Promise<StripeSubscriptionResponse> {
    return this.http.request('/v1/payment/subscription/cancel', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}