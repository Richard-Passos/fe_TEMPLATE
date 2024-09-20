import lodashKeys from 'lodash/keys';

// eslint-disable-next-line no-unused-vars
const keys = lodashKeys as <T extends object>(obj: T) => Array<keyof T>;

export default keys;
