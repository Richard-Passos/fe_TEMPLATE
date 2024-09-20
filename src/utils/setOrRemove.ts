import isType from './isType';

// eslint-disable-next-line no-unused-vars
type ShouldRemove<T> = (value: T[keyof T]) => boolean;

const setOrRemove = <T extends object>(
  obj: T,
  key: keyof T,
  value: T[keyof T] | ShouldRemove<T>
): T => {
  const shouldRemove = isType<ShouldRemove<typeof obj>>(
    typeof value === 'function',
    value
  )
    ? value(obj[key])
    : !value;

  if (shouldRemove) {
    const { [key]: _, ...rest } = obj;

    return rest as T;
  }

  return {
    ...obj,
    [key]: value
  };
};

export default setOrRemove;
export type { ShouldRemove };
