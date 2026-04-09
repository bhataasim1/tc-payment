import { StripePaymentIntentResponse } from 'tc-stripe-contracts';
import { HttpClient } from '../../core/https';
import {
  RetrievePaymentIntentInput
} from './payments.types';

export class PaymentsAPI {
  constructor(private http: HttpClient) { }

  retrievePaymentIntent(
    data: RetrievePaymentIntentInput
  ): Promise<StripePaymentIntentResponse> {
    return this.http.request(
      '/v1/payment/payment-intent/retrieve',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }
}