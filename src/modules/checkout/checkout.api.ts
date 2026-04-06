import { HttpClient } from '../../core/https';
import {
  CheckoutSessionResponse,
  CreateCheckoutSessionDto,
  RetrieveCheckoutSessionInput,
  RetrieveCheckoutSessionResponse,
  UpdateSubscriptionDto,
  UpdateSubscriptionResponse,
} from './checkout.types';

export class CheckoutAPI {
  constructor(private http: HttpClient) { }

  createSession(
    data: CreateCheckoutSessionDto
  ): Promise<CheckoutSessionResponse> {
    return this.http.request('/v1/payment/checkout/session', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  updateSubscription(
    data: UpdateSubscriptionDto
  ): Promise<UpdateSubscriptionResponse> {
    return this.http.request('/v1/payment/checkout/subscription/update', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  retrieveSession(
    data: RetrieveCheckoutSessionInput
  ): Promise<RetrieveCheckoutSessionResponse> {
    return this.http.request(
      '/v1/payment/checkout/session/retrieve',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }
}