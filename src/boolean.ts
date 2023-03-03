import { useCallback } from 'react'
import { useModel } from './useModel'

function parse(value: unknown): boolean {
  switch(value) {
    case 'false':
    case '0': {
      return false
    }

    default: {
      return Boolean(value)
    }
  }
}

export function useBooleanModel(defaultValue: boolean) {
  return useModel(defaultValue, parse)
}
