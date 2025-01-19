interface ApiRequestParams {
  url: string; // The endpoint URL (relative to the base URL)
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; // HTTP methods
  data?: Record<string, any> | FormData | null; // Payload for the request
  params?: Record<string, any> | null; // Query parameters
  headers?: Record<string, string>; // Custom headers
  timeout?: number; // Timeout in milliseconds
}

interface ApiResponse<T> {
  status: number; // HTTP status code
  message?: string; // Optional message from the server
  data: T; // Generic data type for the response payload
}

const BASE_URL = 'https://api.example.com'; // Replace with your base URL

async function apiRequest<T>({
  url,
  method = 'GET',
  data = null,
  params = null,
  headers = {},
  timeout = 10000, // Default timeout: 10 seconds
}: ApiRequestParams): Promise<ApiResponse<T>> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    // Append query parameters to the URL if provided
    let fullUrl = `${BASE_URL}${url}`;
    if (params) {
      const queryString = new URLSearchParams(params).toString();
      fullUrl += `?${queryString}`;
    }

    // Determine headers dynamically
    const defaultHeaders: Record<string, string> = {};
    if (!(data instanceof FormData)) {
      defaultHeaders['Content-Type'] = 'application/json';
    }

    // Merge headers
    const combinedHeaders = {...defaultHeaders, ...headers};

    // Build the fetch options
    const options: RequestInit = {
      method,
      headers: combinedHeaders,
      signal: controller.signal,
    };

    // Add body only for applicable methods
    if (data && method !== 'GET') {
      options.body = data instanceof FormData ? data : JSON.stringify(data);
    }

    // Make the request
    const response = await fetch(fullUrl, options);

    // Parse the response
    const responseData = await response.json();
    clearTimeout(timeoutId);
    return {
      status: response.status,
      data: responseData,
      message: responseData.message || '',
    };
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw new Error(
      `API request failed: ${(error as Error).message || 'Unknown error'}`,
    );
  }
}

// Reusable API methods
const Api = {
  get: <T>(
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, string>,
    timeout?: number,
  ) => apiRequest<T>({url, method: 'GET', params, headers, timeout}),
  post: <T>(
    url: string,
    data?: Record<string, any> | FormData,
    headers?: Record<string, string>,
    timeout?: number,
  ) => apiRequest<T>({url, method: 'POST', data, headers, timeout}),
  put: <T>(
    url: string,
    data?: Record<string, any> | FormData,
    headers?: Record<string, string>,
    timeout?: number,
  ) => apiRequest<T>({url, method: 'PUT', data, headers, timeout}),
  patch: <T>(
    url: string,
    data?: Record<string, any> | FormData,
    headers?: Record<string, string>,
    timeout?: number,
  ) => apiRequest<T>({url, method: 'PATCH', data, headers, timeout}),
  delete: <T>(
    url: string,
    headers?: Record<string, string>,
    timeout?: number,
  ) => apiRequest<T>({url, method: 'DELETE', headers, timeout}),
};

export default Api;
