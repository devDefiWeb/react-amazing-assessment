export enum ActionType {
  // form
  GET_FIELD_SET_DATA = 'action/GET_FIELD_SET_DATA',
  GET_FIELD_SET_DATA_SUCCESS = 'action/GET_FIELD_SET_DATA_SUCCESS',
  GET_FIELD_SET_DATA_FAILED = 'action/GET_FIELD_SET_DATA_FAILED',

  UPDATE_FIELD_SET_DATA = 'action/UPDATE_FIELD_SET_DATA',
  UPDATE_FIELD_SET_DATA_SUCCESS = 'action/UPDATE_FIELD_SET_DATA_SUCCESS',
  UPDATE_FIELD_SET_DATA_FAILED = 'action/UPDATE_FIELD_SET_DATA_FAILED',

  CLEAR_FIELD_SET_DATA = 'action/CLEAR_FIELD_SET_DATA',
  CLEAR_FIELD_SET_DATA_SUCCESS = 'action/CLEAR_FIELD_SET_DATA_SUCCESS',
  CLEAR_FIELD_SET_DATA_FAILED = 'action/CLEAR_FIELD_SET_DATA_FAILED',
}

export interface Action {
  type: ActionType
  payload?: any
}

export interface Field {
  id: string
  type: "select" | "textarea" | "text"
  required?: boolean
  placeholder?: string
  options?: string[]
  value?: string
}

export type FieldSetData = (Field | Field[])[];

export type FormDataType = { [key: string]: string };

export interface ResponseGenerator{
  config?: any,
  data?: any,
  headers?: any,
  request?: any,
  status?: number,
  statusText?: string
  main: {
      temp: number
  }
}


