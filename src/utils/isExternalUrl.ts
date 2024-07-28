import { domainRegex } from '@/regexs';
import baseUrl from '@/utils/baseUrl';

const isExternalUrl = (url: string) =>
  url.indexOf(':') > -1 &&
  baseUrl.replace(domainRegex, '$2') !== url.replace(domainRegex, '$2');

export default isExternalUrl;
