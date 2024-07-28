const normId = (str: string) =>
  (str[0] + str.slice(1).replace(/([A-Z])/g, '-$1'))
    .replace(/[ _]/g, '-')
    .replace(/-{2,}/, '-')
    .toLowerCase();

export default normId;
