type ExtractPrefix<T, P extends string> = T extends `${P}${infer Rest}`
  ? Rest extends `${infer _}.${string}`
    ? never
    : T
  : never;

export default ExtractPrefix;
