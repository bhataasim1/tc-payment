import { HttpClient } from '../../core/https';
import {
  RetrievePaymentIntentInput,
  PaymentIntentResponse,
} from './payments.types';

export class PaymentsAPI {
  constructor(private http: HttpClient) { }

  retrievePaymentIntent(
    data: RetrievePaymentIntentInput
  ): Promise<PaymentIntentResponse> {
    return this.http.request(
      '/v1/payment/payment-intent/retrieve',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }
}