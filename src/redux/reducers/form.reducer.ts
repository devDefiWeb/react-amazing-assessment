import { Action, FieldSetData, ActionType } from "../../model";

export interface IFormState {
    data: FieldSetData;
    isLoading: boolean;
    errorMessage?: string;
}

const defaultState: IFormState = {
    data: [],
    isLoading: false,
    errorMessage: '',
}

export const formReducer = (state: IFormState = defaultState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_FIELD_SET_DATA:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.GET_FIELD_SET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case ActionType.GET_FIELD_SET_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
            }
        case ActionType.UPDATE_FIELD_SET_DATA:
            return {
                ...state,
                data: action.payload,
                isLoading: true,
            }
        case ActionType.UPDATE_FIELD_SET_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case ActionType.UPDATE_FIELD_SET_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
            }
        case ActionType.CLEAR_FIELD_SET_DATA:
            return {
                ...state,
                data: [],
            }
    }
    return state;
};
