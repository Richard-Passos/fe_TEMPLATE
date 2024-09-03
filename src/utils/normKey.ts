import capitalize from './capitalize';

const normKey = (str: string) =>
  str
    ? (str[0] + str.slice(1).replace(/([A-Z])/g, '-$1'))
        .split(/[ _-]/)
        .map((w, i) => (i === 0 ? w.toLowerCase() : capitalize(w)))
        .join('')
    : '';

export default normKey;
