
import { HttpClient } from '../../core/https';
import {
  CreateProductInput,
  ProductResponse,
  UpdateProductInput,
} from './products.types';

export class ProductsAPI {
  constructor(private http: HttpClient) { }

  create(
    data: CreateProductInput
  ): Promise<ProductResponse> {
    return this.http.request('/v1/payment/product/create', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  update(
    data: UpdateProductInput
  ): Promise<ProductResponse> {
    return this.http.request('/v1/payment/product/update', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }
}