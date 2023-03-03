import { useState, useMemo, useCallback } from 'react'

export function useModel<T>(defaultValue: T, parser: (value: unknown) => T) {
  const [value, setValue] = useState(defaultValue)

  const error = useMemo(() => {
    try {
      const parsed = parser(value)
      if (parsed !== value) {
        // TODO: support i18n
        throw new TypeError(`${value} is invalid`)
      }

      return null
    } catch(e: unknown) {
      return e
    }
  }, [parser, value])

  const onChange = useCallback(
    (e: React.ChangeEvent<{ value: string }>) => {
      setValue(parser(e.currentTarget.value))
    },
    [parser],
  )

  return useMemo(
    () => ({
      value,
      error,
      isValid: error == null,
      setValue,
      onChange,
    }),
    [isValid, onChange, value],
  )
}
