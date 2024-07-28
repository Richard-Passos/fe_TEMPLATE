import capitalize from './capitalize';

const normCompName = (str: string) =>
  (str[0] + str.slice(1).replace(/([A-Z])/g, '-$1'))
    .split(/[ _-]/)
    .map(capitalize)
    .join('');

export default normCompName;
