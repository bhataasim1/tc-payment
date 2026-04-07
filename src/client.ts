import { HttpClient, HttpConfig } from "./core/https";
import { BillingAPI } from "./modules/billing/billing.api";
import { CheckoutAPI } from "./modules/checkout/checkout.api";
import { ConnectAPI } from "./modules/connect/connect.api";
import { CustomerAPI } from "./modules/customer/customer.api";
import { PaymentsAPI } from "./modules/payments/payments.api";
import { PricingAPI } from "./modules/pricing/pricing.api";
import { ProductsAPI } from "./modules/products/products.api";


export class TCPaymentSDK {
  private http: HttpClient;

  public checkout: CheckoutAPI;
  public connect: ConnectAPI;
  public billing: BillingAPI;
  public customer: CustomerAPI;
  public pricing: PricingAPI;
  public payment: PaymentsAPI;
  public product: ProductsAPI;

  constructor(config: HttpConfig) {
    this.http = new HttpClient(config);

    this.checkout = new CheckoutAPI(this.http);
    this.connect = new ConnectAPI(this.http);
    this.billing = new BillingAPI(this.http);
    this.customer = new CustomerAPI(this.http);
    this.pricing = new PricingAPI(this.http);
    this.payment = new PaymentsAPI(this.http);
    this.product = new ProductsAPI(this.http);
  }
}