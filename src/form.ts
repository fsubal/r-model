import React from 'react'
import { Model } from './useModel.ts'

/**
 * ignoring TRACE / CONNECT etc...
 */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD'

export interface ModelForm {
  method: HttpMethod
  action: URL
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export function useModelForm(
  method: HttpMethod,
  action: string | URL,
  models: Record<string, Model<any, any>>
) {
  // TODO
}
