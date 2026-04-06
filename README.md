# TC Payment SDK

A payment gateway library for TC Payment, providing a clean TypeScript interface to interact with various payment and billing APIs.

## Installation

```bash
npm install tc-payment
# or
yarn add tc-payment
# or
pnpm add tc-payment
```

## Initialization

First, initialize the `TCPaymentSDK` with your configuration:

```typescript
import { TCPaymentSDK } from 'tc-payment';

const sdk = new TCPaymentSDK({
  baseUrl: 'https://api.your-payment-domain.com', // Replace with actual base URL
  apiKey: 'your-api-key', // Optional: API Key for authentication. Sets the `x-admin-service-api-token` header.
  timeout: 10000, // Optional: Request timeout in milliseconds (default: 10000)
});
```

## Usage & Modules

Once the SDK is initialized, you can access the various modules. Below is a detailed mapping of the available APIs and how to use them.

### 1. Checkout (`sdk.checkout`)

Handles payment checkout sessions and subscription lifecycle events.

- **Create a Checkout Session**
  ```typescript
  const session = await sdk.checkout.createSession({
    // e.g. priceId, successUrl, cancelUrl, customerId, etc.
  });
  ```

- **Update a Subscription**
  ```typescript
  const updatedSubscription = await sdk.checkout.updateSubscription({
    // your UpdateSubscriptionDto fields
  });
  ```

### 2. Connect (`sdk.connect`)

Manage connected accounts, onboarding links, and retrieve balances.

- **Create a Connect Account**
  ```typescript
  const account = await sdk.connect.createAccount({
    // your CreateConnectAccountInput fields
  });
  ```

- **Create an Onboarding Link**
  ```typescript
  const link = await sdk.connect.createOnboardingLink({
    // your CreateOnboardingLinkInput fields
  });
  ```

- **Get Account Balance**
  ```typescript
  const balance = await sdk.connect.getBalance({
    // e.g. { accountId: 'acct_123' }
  });
  ```

- **Retrieve an Account**
  ```typescript
  const accountDetails = await sdk.connect.retrieveAccount({
    // e.g. { accountId: 'acct_123' }
  });
  ```

- **Delete an Account**
  ```typescript
  const result = await sdk.connect.deleteAccount({
    // e.g. { accountId: 'acct_123' }
  });
  ```

### 3. Billing (`sdk.billing`)

Manage billing experiences like self-serve customer portals.

- **Create a Portal Session**
  ```typescript
  const portalSession = await sdk.billing.createPortalSession({
    // your CreateBillingPortalSessionInput fields
  });
  ```

### 4. Customer (`sdk.customer`)

Manage platform customers.

- **Create a Customer**
  ```typescript
  const customer = await sdk.customer.create({
    // your CreateCustomerInput fields
  });
  ```

### 5. Pricing (`sdk.pricing`)

Retrieve pricing and plan information from the backend.

- **Retrieve a Price**
  ```typescript
  const price = await sdk.pricing.retrievePrice({
    // your RetrievePriceInput fields
  });
  ```

## Development

```bash
# Install dependencies
npm install

# Build the SDK
npm run build

# Run in watch mode for development
npm run dev
```

## License

ISC
