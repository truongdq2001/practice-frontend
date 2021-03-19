import {fork} from 'redux-saga/effects';

import getProductSaga from './getProductSaga';

export default function* rootSaga() {
  yield fork(getProductSaga);
}
