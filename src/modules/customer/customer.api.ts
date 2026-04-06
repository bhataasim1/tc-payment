import { HttpClient } from '../../core/https';
import {
  CreateCustomerInput,
  CustomerResponse,
} from './customer.types';

export class CustomerAPI {
  constructor(private http: HttpClient) { }

  create(
    data: CreateCustomerInput
  ): Promise<CustomerResponse> {
    return this.http.request('/v1/payment/create-user', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}