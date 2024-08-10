const objKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

export default objKeys;
