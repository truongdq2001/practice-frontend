import {ACTIONTYPES} from './actionTypes';

export const getProduct = payload => ({
  type: ACTIONTYPES.GET_PRODUCT,
  payload,
});
