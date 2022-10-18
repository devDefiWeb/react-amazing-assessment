import { all, fork } from 'redux-saga/effects';

import formSaga from './form.saga';

export default function* startForman() {
  yield all([
    fork(formSaga),
  ]);
}
