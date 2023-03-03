import { useCallback } from 'react'
import { useModel } from './useModel'

export function useNumericModel(
  defaultValue: number,
  mode: 'integer' | 'float' = 'float'
) {
  const parse = useCallback((value: unknown) => {
    let parsed: number = NaN
    switch(mode) {
      case 'integer': {
        parsed = parseInt(String(value))
        break
      }

      case 'float': {
        parsed = parseFloat(String(value))
        break
      }
    }

    if (Number.isNaN(parsed)) {
      return null
    }

    return parsed
  }, [mode])

  return useModel(defaultValue, parse)
}
