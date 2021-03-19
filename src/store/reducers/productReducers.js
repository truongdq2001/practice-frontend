import {
  ACTIONTYPES,
  createTypeFall,
  createTypeLoadEnd,
  createTypeLoadStart,
  createTypeResult,
} from '../actions/actionTypes';

const initProduct = {
  data: [],
  loading: false,
  totalPage: null,
};
export const productReducers = (state = initProduct, {type, payload}) => {
  switch (type) {
    case createTypeResult(ACTIONTYPES.GET_PRODUCT):
      return {
        ...state,
        data: [...state.data, ...payload.data],
        totalPage: payload.totalPage,
      };
    case createTypeLoadStart(ACTIONTYPES.GET_PRODUCT):
      return {
        ...state,
        loading: payload,
      };

    case createTypeLoadEnd(ACTIONTYPES.GET_PRODUCT):
      return {
        ...state,
        loading: payload,
      };
    default:
      return Object.assign({}, state);
  }
};
