export type HttpConfig = {
  baseUrl: string;
  apiKey?: string;
  timeout?: number;
};

export class HttpClient {
  constructor(private config: HttpConfig) { }

  async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, this.config.timeout ?? 10000);

    try {
      const res = await fetch(`${this.config.baseUrl}${path}`, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...(this.config.apiKey && {
            'x-admin-service-api-token': this.config.apiKey,
          }),
          ...(options.headers || {}),
        },
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error?.message || 'Request failed');
      }

      return res.json();
    } finally {
      clearTimeout(timeout);
    }
  }
}