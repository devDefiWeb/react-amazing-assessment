import { combineReducers } from "redux";

import { formReducer, IFormState } from "./form.reducer";

export interface IAppState {
    form: IFormState;
}

export default combineReducers({
    form: formReducer,
});
