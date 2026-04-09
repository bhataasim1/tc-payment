import { StripeCustomerResponse } from 'tc-stripe-contracts';
import { HttpClient } from '../../core/https';
import {
  CreateCustomerInput
} from './customer.types';

export class CustomerAPI {
  constructor(private http: HttpClient) { }

  create(
    data: CreateCustomerInput
  ): Promise<StripeCustomerResponse> {
    return this.http.request('/v1/payment/create-user', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}