import { urlRegex } from '@/constants/regexs';
import baseUrl from '@/utils/baseUrl';

const isExternalUrl = (url: string) =>
  url.indexOf(':') > -1 &&
  baseUrl.replace(urlRegex, '$2$3$4') !== url.replace(urlRegex, '$2$3$4');

export default isExternalUrl;
