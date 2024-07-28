const regexs = {
  domain: /[a-z]*?:\/\/([a-z]\.)?(?=[a-z]*\.)(.*)\/.*/i
};

export default regexs;
export const { domain: domainRegex } = regexs;
