import { useModel } from './useModel'

function useEnumModel<T extends string>(defaultValue: T, options: readonly T[]) {
  return useModel(defaultValue, oneOfString<T[]>(...options))
}

function oneOfString<T extends readonly string[]>(...options: T) {
  return function parse(value: unknown) {
    if (typeof value !== 'string') {
      throw new TypeError()
    }

    if (options.includes(value as any)) {
      throw new RangeError()
    }

    return value as T[number]
  }
}
