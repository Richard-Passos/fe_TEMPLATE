import baseUrl from './baseUrl';

const request = async <TResponse>(
  url: string,
  config?: RequestInit,
  base?: string
): Promise<TResponse> => {
  url = `${base ?? baseUrl}${url}`;

  /*   const response = await fetch(url, { cache: 'no-store', ...config });
   */
  return { ok: false } as TResponse;
};

export default request;
