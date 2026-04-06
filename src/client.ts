import { HttpClient, HttpConfig } from "./core/https";
import { BillingAPI } from "./modules/billing/billing.api";
import { CheckoutAPI } from "./modules/checkout/checkout.api";
import { ConnectAPI } from "./modules/connect/connect.api";


export class TCPaymentSDK {
  private http: HttpClient;

  public checkout: CheckoutAPI;
  public connect: ConnectAPI;
  public billing: BillingAPI;
  // public customer: CustomerAPI;

  constructor(config: HttpConfig) {
    this.http = new HttpClient(config);

    this.checkout = new CheckoutAPI(this.http);
    this.connect = new ConnectAPI(this.http);
    this.billing = new BillingAPI(this.http);
    // this.customer = new CustomerAPI(this.http);
  }
}