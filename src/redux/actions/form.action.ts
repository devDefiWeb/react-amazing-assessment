import { Action, ActionType, FieldSetData } from "../../model";

export const getFieldSetData = (): Action => ({
    type: ActionType.GET_FIELD_SET_DATA,
})

export const getFieldSetDataSucess = (data: FieldSetData): Action => ({
    type: ActionType.GET_FIELD_SET_DATA_SUCCESS,
    payload: data,
})

export const getFieldSetDataFailed = (): Action => ({
    type: ActionType.GET_FIELD_SET_DATA_FAILED,
})

export const updateFieldSetData = (data: FieldSetData): Action => ({
    type: ActionType.UPDATE_FIELD_SET_DATA,
    payload: data,
})

export const updateFieldSetDataSucess = (): Action => ({
    type: ActionType.UPDATE_FIELD_SET_DATA_SUCCESS,
})

export const updateFieldSetDataFailed = (): Action => ({
    type: ActionType.UPDATE_FIELD_SET_DATA_FAILED,
})

export const clearFieldSetData = (): Action => ({
    type: ActionType.CLEAR_FIELD_SET_DATA,
})


