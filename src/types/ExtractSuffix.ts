type ExtractSuffix<T, P extends string> = T extends `${P}${infer S}`
  ? S extends `${string}.${string}`
    ? never
    : S
  : never;

export default ExtractSuffix;
