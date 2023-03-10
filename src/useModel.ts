import React, { useId, useState, useMemo, useCallback } from 'react'

export interface Model<T, E = Error> {
  id: string
  value: T
  error: E | null
  isValid: boolean
  setValue: React.Dispatch<T>
  onChange: React.ChangeEventHandler<{ value: string }>
}

export function useModel<T, E = Error>(defaultValue: T, parser: (value: unknown) => T): Model<T, E> {
  const id = useId()
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
      id,
      value,
      error,
      isValid: error == null,
      setValue,
      onChange,
    }),
    [id, error, onChange, value],
  )
}
