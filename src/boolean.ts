import { useCallback } from 'react'
import { useModel } from './useModel'

function parse(value: unknown): boolean {
  switch(value) {
    case false:
    case '':
    case 'false':
    case 0:
    case -0:
    case 0n:
    case '0':
    case null:
    case undefined:
    case NaN:
    {
      return false
    }

    default: {
      return true
    }
  }
}

export function useBooleanModel(defaultValue: boolean) {
  return useModel(defaultValue, parse)
}
