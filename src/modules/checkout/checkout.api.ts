import { StripeCheckoutSessionResponse, StripeSubscriptionResponse } from 'tc-stripe-contracts';
import { HttpClient } from '../../core/https';
import {
  CreateCheckoutSessionDto,
  RetrieveCheckoutSessionInput,
  UpdateSubscriptionDto
} from './checkout.types';

export class CheckoutAPI {
  constructor(private http: HttpClient) { }

  createSession(
    data: CreateCheckoutSessionDto
  ): Promise<StripeCheckoutSessionResponse> {
    return this.http.request('/v1/payment/checkout/session', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  updateSubscription(
    data: UpdateSubscriptionDto
  ): Promise<StripeSubscriptionResponse> {
    return this.http.request('/v1/payment/checkout/subscription/update', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  retrieveSession(
    data: RetrieveCheckoutSessionInput
  ): Promise<StripeCheckoutSessionResponse> {
    return this.http.request(
      '/v1/payment/checkout/session/retrieve',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }
}