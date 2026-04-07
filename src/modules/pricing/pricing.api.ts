import { HttpClient } from '../../core/https';
import {
  CreatePriceInput,
  PriceResponse,
  RetrievePriceInput,
  UpdatePriceInput,
} from './pricing.types';

export class PricingAPI {
  constructor(private http: HttpClient) { }

  createPrice(
    data: CreatePriceInput
  ): Promise<PriceResponse> {
    return this.http.request('/v1/payment/price/create', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  retrievePrice(
    data: RetrievePriceInput
  ): Promise<PriceResponse> {
    return this.http.request('/v1/payment/price/retrieve', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  updatePrice(
    data: UpdatePriceInput
  ): Promise<PriceResponse> {
    return this.http.request('/v1/payment/price/update', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }
}