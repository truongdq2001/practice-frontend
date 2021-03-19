import {put, takeLatest} from 'redux-saga/effects';
import API from '../../config/api';
import {ACTIONTYPES} from '../actions/actionTypes';
import {
  requestLoadEnd,
  requestLoadStart,
  requestResult,
} from '../actions/common';
function* getProductFunc(action) {
  try {
    yield put(requestLoadStart(ACTIONTYPES.GET_PRODUCT, true));
    const response = yield API.get(`card?path=${action.payload}`);
    if (response.data) {
      yield put(requestResult(ACTIONTYPES.GET_PRODUCT, response.data));
      yield put(requestLoadEnd(ACTIONTYPES.GET_PRODUCT, false));
    }
  } catch (error) {
    yield put(requestLoadEnd(ACTIONTYPES.GET_PRODUCT, false));
    console.log(error);
  }
}

export default function* getProductSaga() {
  yield takeLatest(ACTIONTYPES.GET_PRODUCT, getProductFunc);
}
