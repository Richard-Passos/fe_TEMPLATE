import baseUrl from './baseUrl';

const request = async <TResponse>(
  url: string,
  config?: RequestInit,
  base?: string
): Promise<TResponse> => {
  url = `${base ?? baseUrl}${url}`;

  const response = await fetch(url, config);

  return (await response.json()) as TResponse;
};

export default request;
