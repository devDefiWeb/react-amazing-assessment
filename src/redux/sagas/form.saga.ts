import { put, takeEvery } from 'redux-saga/effects';
import fieldSetData from '../../mockup/fieldSetData';
import { Action, ActionType, Field, FieldSetData, FormDataType } from '../../model';
import { getFieldSetDataFailed, getFieldSetDataSucess, updateFieldSetData, updateFieldSetDataFailed, updateFieldSetDataSucess } from '../actions/form.action';

// get form data
function* getFormSaga(action: Action): Generator<any> {
  try {
    // need to be replaced with code calling backend API 
    const response: FieldSetData = fieldSetData;

    yield put(getFieldSetDataSucess(response));
  } catch (error) {
    yield put(getFieldSetDataFailed());
  }
}

function* updateFormSaga(action: Action): Generator<any> {
  try {
    let fieldSetList: Field[] = action.payload.reduce((res: Field[], item: Field | Field[]) => (
      Array.isArray(item) ? [...res, ...item] : [...res, item]
    ), []);

    let formData: FormDataType = fieldSetList.reduce((res: FormDataType, item: Field) => ({
      ...res, [item.id]: item.value || ""
    }), {});

    // need to call backend API to update formData 
    // const response: ResponseGenerator = yield call(updateFormData, formData);

    yield put(updateFieldSetDataSucess());
  } catch (error) {
    yield put(updateFieldSetDataFailed());
  }
}

export default function* formSaga() {
  yield takeEvery(ActionType.GET_FIELD_SET_DATA as any, getFormSaga);
  yield takeEvery(ActionType.UPDATE_FIELD_SET_DATA as any, updateFormSaga);
}
