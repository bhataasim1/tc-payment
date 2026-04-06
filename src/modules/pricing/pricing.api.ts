import { HttpClient } from '../../core/https';
import {
  PriceResponse,
  RetrievePriceInput,
} from './pricing.types';

export class PricingAPI {
  constructor(private http: HttpClient) { }

  retrievePrice(
    data: RetrievePriceInput
  ): Promise<PriceResponse> {
    return this.http.request('/v1/payment/retreive-price', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}