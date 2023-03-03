import { useState, useMemo, useCallback } from 'react'

export function useModel<T>(defaultValue: T, parser: (value: unknown) => T) {
  const [value, setValue] = useState(defaultValue)

  const isValid = useMemo(() => {
    try {
      return parser(value) === value
    } catch {
      return false
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
      isValid,
      setValue,
      onChange,
    }),
    [isValid, onChange, value],
  )
}
