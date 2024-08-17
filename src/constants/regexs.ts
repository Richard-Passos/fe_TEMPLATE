const regexs = {
  url: /([a-z]*?):\/\/([a-z]*\.)?(?=[a-z]*\.)(.*)(\..*)\/.*/i
} as const;

export default regexs;
export const { url: urlRegex } = regexs;
