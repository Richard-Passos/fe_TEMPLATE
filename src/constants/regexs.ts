const regexs = {
  domain: /[a-z]*?:\/\/([a-z]\.)?(?=[a-z]*\.)(.*)\/.*/i
} as const;

export default regexs;
export const { domain: domainRegex } = regexs;
